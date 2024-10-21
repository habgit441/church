"use client";

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'; 

const stripePromise = loadStripe('your_stripe_publishable_key');

const MessageDownload = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null); 
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async (messageId: number) => {
    try {
      setIsLoading(true);
      setSelectedMessage(messageId); 
      const stripe = await stripePromise;
      const { data } = await axios.post('/api/create-checkout-session', {
        phoneNumber,
        messageId, 
      });

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        alert(result.error.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

// this will handle verification 
  const verifyCode = (messageId: number) => {
    if (verificationCode === generatedCode) {
      setIsCodeVerified(true);
      alert('Code verified successfully. Downloading file...');

      // Trigger the download for the selected message
      const link = document.createElement('a');
      link.href = `/vidoes/message${messageId}.mp4`; 
      link.download = `message-video-${messageId}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  // verification to send the code via SMS
  const sendVerificationCode = async () => {
    try {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(code);
      await axios.post('/api/send-sms', { phoneNumber, code });
      alert('Verification code sent to your phone.');
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const messages = [
    { id: 1, title: 'Sunday Message', date: '19th October 2024', teacher: 'John Doe' },
    { id: 2, title: 'Wednesday Bible Study', date: '17th October 2024', teacher: 'Jane Smith' },
    { id: 3, title: 'Youth Conference', date: '15th October 2024', teacher: 'Pastor Mike' },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Messages</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {messages.map((message) => (
          <div key={message.id} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Video on the left side */}
              <div className="lg:w-1/3 w-full">
                <video
                  controls
                  className="w-full rounded-lg"
                  src={`/path-to-your-video-file-${message.id}.mp4`} // Replace with actual video URL for each message
                />
              </div>

              {/* Information and Download button on the right side */}
              <div className="lg:w-2/3 w-full">
                <h3 className="text-2xl font-semibold text-gray-800">Title: {message.title}</h3>
                <p className="text-gray-600">Date: {message.date}</p>
                <p className="text-gray-600">Teacher: {message.teacher}</p>

                {/* Payment and Download Section */}
                {!isPaymentSuccess || selectedMessage !== message.id ? (
                  <div className="mt-4">
                    <p className="text-lg font-semibold mb-2">Pay to Download:</p>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                    />
                    <button
                      onClick={() => handlePayment(message.id)} // Handle payment for the specific message
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                      disabled={isLoading && selectedMessage === message.id}
                    >
                      {isLoading && selectedMessage === message.id
                        ? 'Processing...'
                        : `Pay $10 to Download`}
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p className="text-lg font-semibold mb-2">Enter the code sent to your phone:</p>
                    <input
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="border border-gray-300 p-2 rounded-lg w-full mb-4 text-black"
                    />
                    <button
                      onClick={() => verifyCode(message.id)} 
                      className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
                    >
                      Verify Code
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageDownload;
