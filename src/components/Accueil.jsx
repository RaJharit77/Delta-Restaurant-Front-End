import React, { useEffect, useState } from 'react';
import heroImage from '../assets/img/phRealist.jpg';

function Accueil() {
    const [opacity, setOpacity] = useState(0.5);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const newOpacity = 0.5 + scrollPos / 500;
            setOpacity(Math.min(newOpacity, 0.9));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            id="accueil"
            className="h-screen bg-cover bg-center w-full relative"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black" style={{ opacity }}></div>
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl sm:text-4xl font-bold mb-4 text-creme">
                    Bienvenue chez Delta Restaurant
                </h1>
                <p className="text-xl sm:text-lg mb-8 text-creme">
                    Découvrez le goût d'une cuisine de luxe,<br />
                    où chaque plat est une œuvre d'art pour vos sens.
                </p>
                <a href="#menu" className="bg-creme text-black py-2 px-4 rounded hover:bg-or transition">
                    Explorer le Menu
                </a>
            </div>
        </div>
    );
}

export default Accueil;
