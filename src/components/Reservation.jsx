import React from 'react';

function Reservation() {
    return (
        <div
            id='reservation'
            className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
            style={{ backgroundImage: "url('../../public/img/reservation.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            <div className="relative z-10 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-4xl font-bold mb-8 text-creme">
                    Réservez une Table
                </h2>
                <p className="text-lg text-creme mb-4">
                    Remplissez le formulaire ci-dessous pour réserver une table dans notre restaurant.
                </p>
                <form className="w-full">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Prénom(s)"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Numéro de Téléphone"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <button type="submit" className="w-full bg-creme text-black py-2 px-4 rounded hover:bg-or transition">
                        Réserver
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Reservation;
