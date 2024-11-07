"use client";
import React from 'react';

const Navbar = ({ setCategory, currentCategory }) => {
    const categories = ['All', 'Pastor', 'Minister', 'User', 'Media'];
    
    return (
        <nav className="fixed bottom-4 left-0 w-full flex justify-center space-x-4 z-10">
            {/* "All" Button */}
            <button
                onClick={() => setCategory('all')}
                className={`py-2 px-4 rounded-full ${
                    currentCategory === 'all'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-blue-500 border border-blue-500'
                }`}
            >
                All
            </button>

            {/* Category Buttons */}
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setCategory(category)}
                    className={`py-2 px-4 rounded-full ${
                        currentCategory === category
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-blue-500 border border-blue-500'
                    }`}
                >
                    {category}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
