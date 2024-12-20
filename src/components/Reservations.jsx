import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Reservation() {
    const [reservationData, setReservationData] = useState({
        firstname: '',
        name: '',
        email: '',
        phone: '',
        dateTime: '',
        guests: '',
    });

    const [status, setStatus] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || 'https://delta-restaurant-back-end.vercel.app' || import.meta.env.VITE_REACT_API_URL || 'https://delta-restaurant-back-end.onrender.com';

    /*const apiUrl = 'http://localhost:5000';*/

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/reservations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResponseMessage(data.message);
                setReservationData({
                    firstname: '',
                    name: '',
                    email: '',
                    phone: '',
                    dateTime: '',
                    guests: '',
                });
            } else {
                setStatus('error');
                setResponseMessage(data.message || 'Une erreur est survenue.');
            }
        } catch (error) {
            console.error('Erreur lors de la réservation:', error);
            setStatus('error');
            setResponseMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div
            id="reservations"
            className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
            style={{ backgroundImage: "url('/img/reservation.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

            <div className="relative z-10 bg-white bg-opacity-10 p-6 rounded-lg shadow-xl max-w-md w-full my-20">
                <h2 className="text-4xl font-bold mb-8 text-creme">
                    Réservez une Table
                </h2>
                <p className="text-lg text-creme mb-4">
                    Remplissez le formulaire ci-dessous pour réserver une table dans notre restaurant.
                </p>

                {status === 'success' && (
                    <div className="flex items-center justify-center text-green-500 mb-4">
                        <FaCheckCircle className="mr-2" />
                        <span>{responseMessage}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center justify-center text-red-500 mb-4">
                        <FaTimesCircle className="mr-2" />
                        <span>{responseMessage}</span>
                    </div>
                )}

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Prénom(s)"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.firstname}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.name}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.email}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Numéro de Téléphone"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.phone}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="datetime-local"
                            name="dateTime"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.dateTime}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="number"
                            name="guests"
                            placeholder="Nombre d'invités"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.guests}
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
