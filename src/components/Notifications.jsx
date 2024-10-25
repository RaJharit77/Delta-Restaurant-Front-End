// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';

const Notification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 w-80 border border-gray-600">
            <p className="text-yellow-100 font-semibold">Visitez notre hôtel !</p>
            <p className="text-gray-900 mt-2">
                Profitez d'une expérience inoubliable dans notre hôtel de rêve.
            </p>
            <a
                href="https://delta-hotel-madagascar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-100 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer"
            >
                En savoir plus
            </a>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-yellow-300 hover:text-yellow-400 cursor-pointer bg-emerald-600"
            >
                &times;
            </button>
        </div>
    );
};

export default Notification;
