"use client";

import React, { useState } from 'react';
import Navbar from './navbar';

const images = {
    All: ["/images/music.jpg", "/images/music.jpg", "/images/music.jpg"],
    Pastor: ["/images/music.jpg", "/images/music.jpg", "/images/music.jpg"],
    Minister: ["/images/music.jpg", "/images/music.jpg", "/images/music.jpg"],
    User: [/* Array of user images */],
    Media: [/* Array of media images */],
};

const Gallery = () => {
    const [category, setCategory] = useState('All');
    const displayedImages = category === 'All' ? Object.values(images).flat() : images[category];

    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-green-900">
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {displayedImages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Gallery ${category}`} 
                        className="rounded-lg shadow-md object-contain w-full h-auto"
                    />
                ))}
            </div>

            {/* Bottom Navbar */}
            <Navbar setCategory={setCategory} />
        </div>
    );
};

export default Gallery;
