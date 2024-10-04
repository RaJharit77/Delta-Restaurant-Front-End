import React, { useState } from 'react';

function Reservation() {
    const [reservationData, setReservationData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });
            const data = await response.json();
            alert(data.message);
            setReservationData({
                name: '',
                email: '',
                date: '',
                time: '',
                guests: '',
                message: '',
            });
        } catch (error) {
            console.error('Erreur lors de la réservation:', error);
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    };

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
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name" // Ajoutez le nom pour la gestion d'état
                            placeholder="Prénom(s)"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange} // Ajoutez l'événement onChange
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="surname" // Ajoutez le nom pour la gestion d'état
                            placeholder="Nom"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange} // Ajoutez l'événement onChange
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email" // Ajoutez le nom pour la gestion d'état
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange} // Ajoutez l'événement onChange
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone" // Ajoutez le nom pour la gestion d'état
                            placeholder="Numéro de Téléphone"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange} // Ajoutez l'événement onChange
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="date"
                            name="date" // Ajoutez le nom pour la gestion d'état
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange} // Ajoutez l'événement onChange
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
