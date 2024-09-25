// NavigationBar.jsx
import React, { useEffect, useState } from 'react';
import logo from '../../public/img/delta.png';

function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
            ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                <a href="#home" className="flex items-center">
                    <img src={logo} alt="Delta Restaurant Logo" className="h-8 mr-2" />
                    <span className="text-2xl font-bold text-yellow-400">Delta Restaurant</span>
                </a>
                <div className="space-x-4 flex items-center">
                    <a href="#home" className="text-red-500 hover:text-blue-600">Home</a>
                    <a href="#menu" className="text-red-500 hover:text-blue-600">Menu</a>
                    <a href="#about" className="text-red-500 hover:text-blue-600">About</a>
                    <a href="#contact" className="text-red-500 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
