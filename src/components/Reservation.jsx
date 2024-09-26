import React from 'react';

function Reservation() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-8 text-teal-600">Réservez une Table</h2>
            <p className="text-lg text-teal-400 mb-4">Remplissez le formulaire ci-dessous pour réserver une table dans notre restaurant.</p>
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Nom" 
                        className="w-full px-4 py-2 border border-teal-500 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 border border-teal-500 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-teal-500 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
                    Réserver
                </button>
            </form>
        </div>
    );
}

export default Reservation;
