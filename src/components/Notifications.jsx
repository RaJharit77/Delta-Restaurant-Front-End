import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Notifications = () => { 
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-slate-700 bg-opacity-50 shadow-lg rounded-lg p-4 w-80 border border-gray-600 z-50">
            <p className="text-creme font-semibold text-lg text-left">Visitez notre hôtel !</p>
            <p className="text-gray-200 mt-2.5 text-left">
                Vivez une expérience luxueuse et inoubliable dans notre hôtel, conçu pour votre confort et bien-être.
            </p>
            <button
                onClick={() => window.open("https://delta-hotel-madagascar.vercel.app", "_blank")}
                className="inline-block mt-3.5 bg-creme text-black py-2 px-4 rounded-md hover:bg-or transition duration-300 cursor-pointer"
            >
                En savoir plus
            </button>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-creme hover:text-or bg-emerald-700 bg-opacity-50 cursor-pointer"
                aria-label="Fermer la notification"
            >
                <FaTimes />
            </button>
        </div>
    );
};

export default Notifications;
