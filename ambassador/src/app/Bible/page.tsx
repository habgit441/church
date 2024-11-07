"use client";

import React, { useEffect, useRef } from "react";



const BibleStudyPage = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.2; 
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < offset) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        ref={addToRefs}
        className="bg-blue-600 flex text-black flex-col items-center justify-center py-16 opacity-0 transition-opacity duration-700 visible "
      >
        <h1 className="text-5xl md:text-7xl font-bold mt-10">
          Our Bible Study
        </h1>

        <div className="flex gap-10">
          <p className="mt-4 text-xl md:text-2xl">
            Join us as we explore the Word of God and grow in faith together.
          </p>
        </div>
      </section>

      
        <section ref={addToRefs} className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Study Topics</h2>
          <p className="text-lg text-gray-700 mb-6">
            Each week, we dive into various topics that help us understand the Bible in a deeper way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Faith and Works</h3>
              <p className="text-gray-600">Understanding the relationship between our faith in Christ and how we live our lives.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">The Fruit of the Spirit</h3>
              <p className="text-gray-600">Learning how the Holy Spirit transforms our character as we walk with God.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Prayer and Intercession</h3>
              <p className="text-gray-600">Exploring the power of prayer and how we can intercede for others effectively.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Upcoming Events</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stay connected and don’t miss our exciting upcoming events designed to help you grow in your walk with Christ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Youth Bible Camp</h3>
              <p className="text-gray-600">Join us for a weekend of fun, fellowship, and spiritual growth at our annual Bible camp!</p>
              <p className="text-gray-500 mt-2">Date: November 10-12, 2024</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Christmas Bible Study Series</h3>
              <p className="text-gray-600">A special series exploring the birth of Christ and the true meaning of Christmas.</p>
              <p className="text-gray-500 mt-2">Date: December 1-24, 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section  ref={addToRefs} className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Join Our Bible Study</h2>
          <p className="text-lg mb-6">We meet every Wednesday at 7:00 PM. We’d love to have you with us as we grow in faith together.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Involved
          </button>
        </div>
      </section>


    </div>
  );
};

export default BibleStudyPage;
