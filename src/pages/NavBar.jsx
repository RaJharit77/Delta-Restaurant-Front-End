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
                    <img src={logo} alt="Delta Restaurant Logo" className="w-14 h-14 object-cover rounded-full" />
                    <span className="text-2xl font-bold text-creme">Delta Restaurant</span>
                </a>
                <div className="space-x-4 flex items-center">
                    <a href="#home" className="text-creme hover:text-or">Accueil</a>
                    <a href="#about" className="text-creme hover:text-or">À Propos</a>
                    <a href="#menu" className="text-creme hover:text-or">Menu</a>
                    <a href="#contact" className="text-creme hover:text-or">Contact</a>
                    <a href="#reservation" className="text-black bg-creme py-2 px-4 rounded hover:bg-or transition">
                        Reservation
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
