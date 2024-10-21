"use client";

import React from "react";
import Image from "next/image";
import MissionImage from "../public/images/images.jpg"; 

const MissionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
     
        <div className="w-full md:w-1/2 h-64 md:h-96 relative">
          <Image
            src={MissionImage}
            alt="Mission Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>

 
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Vision 
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
          The vision of Living Faith Christian Church is to passionately embody and share the message of Jesus, dedicated to fulfilling the Great Commission and living out the Greatest Commandment: to love God wholeheartedly and to love others unconditionally. We strive to ignite a movement of discipleship that transforms lives and communities, inspiring everyone to reflect Christ’s love in all there daily activities. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
