import React, { useEffect, useState } from 'react';
import logo from '../../public/img/delta.png';

function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                <a href="#home" className="flex items-center">
                    <img src={logo} alt="Delta Restaurant Logo" className="w-14 h-14 object-cover rounded-full" />
                    <span className="text-2xl font-bold text-creme ml-2 hover:text-or glow-button">Delta Restaurant®</span>
                </a>
                
                <button
                    className="absolute right-4 top-7 block md:hidden text-creme"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ zIndex: 51 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>

                <div className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto mt-8 md:mt-0`}>
                    <div className="flex flex-col md:flex-row md:space-x-4 items-center">
                        <a href="#home" className="text-creme hover:text-or block py-2 px-4 text-center md:text-left relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-or after:transition-all after:duration-300 hover:after:w-full">Accueil</a>
                        <a href="#about" className="text-creme hover:text-or block py-2 px-4 text-center md:text-left relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-or after:transition-all after:duration-300 hover:after:w-full">À Propos</a>
                        <a href="#menu" className="text-creme hover:text-or block py-2 px-4 text-center md:text-left relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-or after:transition-all after:duration-300 hover:after:w-full">Menu</a>
                        <a href="#contact" className="text-creme hover:text-or block py-2 px-4 text-center md:text-left relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-or after:transition-all after:duration-300 hover:after:w-full">Contact</a>
                        <a href="#commande" className="text-creme hover:text-or block py-2 px-4 text-center md:text-left relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-or after:transition-all after:duration-300 hover:after:w-full">Commande</a>

                        <a href="#reservation" className="text-black bg-creme py-2 px-4 rounded hover:bg-or transition block text-center md:text-left mt-2 md:mt-0 relative glow-button">
                            Reservation
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
