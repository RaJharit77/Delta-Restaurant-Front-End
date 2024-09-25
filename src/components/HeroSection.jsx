import React from 'react';
import heroImage from '../../public/img/background_2.jpg';

function Hero() {
    return (
        <div 
            className="h-screen bg-cover bg-center w-full relative" 
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center text-yellow-400 dark:text-gray-300">
                <h1 className="text-5xl font-bold mb-4 text-blue-800 dark:text-white">Welcome to Delta Restaurant</h1>
                <p className="text-xl mb-8">Experience the taste of luxury dining.</p>
                <a href="#menu" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                    Explore Menu
                </a>
            </div>
        </div>
    );
}

export default Hero;
