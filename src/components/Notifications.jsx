// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';

const Notification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Affiche la notification après 2 secondes
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Nettoyage au démontage du composant
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-200">
            <p className="text-gray-800 font-semibold">Visitez notre hôtel !</p>
            <p className="text-gray-600 mt-2">
                Profitez d'une expérience inoubliable dans notre hôtel de rêve.
            </p>
            <a
                href="https://votre-hotel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
                En savoir plus
            </a>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
                &times;
            </button>
        </div>
    );
};

export default Notification;
