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
        <div className="fixed bottom-5 right-5 bg-white bg-opacity-50 shadow-lg rounded-lg p-4 w-80 border border-gray-600">
            <p className="text-creme font-semibold">Visitez notre hôtel !</p>
            <p className="text-gray-300 mt-2">
                Profitez d'une expérience inoubliable dans notre hôtel de rêve.
            </p>
            <a
                href="https://delta-hotel-madagascar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-creme text-black py-2 px-4 rounded-md hover:bg-or transition duration-300"
            >
                En savoir plus
            </a>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-emerald-600 hover:text-emerald-600 bg-gray-700 bg-opacity-50"
            >
                &times;
            </button>
        </div>
    );
};

export default Notification;
