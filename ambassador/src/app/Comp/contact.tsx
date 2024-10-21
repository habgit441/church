"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray" >
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      
      <div className="shadow-lg p-6 rounded-lg mb-8 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <FontAwesomeIcon icon={faPhone} className="text-green-500 text-3xl mb-2" />
            <p className="text-gray-800">+123 456 7890</p>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-3xl mb-2" />
            <p className="text-gray-800">lffAmbassador'sassembly@gmail.</p>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-3xl mb-2" />
            <p className="text-gray-800">7, fashe street</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-4xl text-blue-600 hover:text-blue-800" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-4xl text-pink-600 hover:text-pink-800" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-4xl text-green-500 hover:text-green-700" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-4xl text-red-600 hover:text-red-800" />
        </a>
      </div>

      <div className="shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/place/7+Fashe+St,+Olowora,+Lagos+105102,+Lagos/@6.628015,3.3724529,3a,75y,191.66h,96.09t/data=!3m7!1e1!3m5!1ssOcH7QpVcZHdHzAG3v64cw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-6.089408712649657%26panoid%3DsOcH7QpVcZHdHzAG3v64cw%26yaw%3D191.65720956500596!7i13312!8i6656!4m15!1m8!3m7!1s0x103b93a3afd5f1c3:0x74358966d02e539b!2s7+Fashe+St,+Olowora,+Lagos+105102,+Lagos!3b1!8m2!3d6.6278487!4d3.3722721!16s%2Fg%2F11h15_g8j5!3m5!1s0x103b93a3afd5f1c3:0x74358966d02e539b!8m2!3d6.6278487!4d3.3722721!16s%2Fg%2F11h15_g8j5?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
