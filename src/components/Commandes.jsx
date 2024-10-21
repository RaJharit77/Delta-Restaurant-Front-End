import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Commande() {
    const [orderData, setOrderData] = useState({
        mealName: '',
        softDrink: '',
        quantity: '',
        tableNumber: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [status, setStatus] = useState(null);

    const apiUrl = 'https://delta-restaurant-back-end.vercel.app' || import.meta.env.VITE_REACT_APP_API_URL || 'https://delta-restaurant-back-end.onrender.com' || import.meta.env.VITE_REACT_API_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/commandes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

            const data = await response.json();
            setStatus('success');
            setResponseMessage(`Commande envoyée avec succès! Repas: ${data.order.mealName}, Quantité: ${data.order.quantity}, Table: ${data.order.tableNumber}`);
        } catch (error) {
            setStatus('error');
            setResponseMessage('Une erreur est survenue. Réessayez plus tard.');
            console.error('Erreur lors de la commande:', error);
        }
    };

    return (
        <div
            id="commandes"
            className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
            style={{ backgroundImage: "url('/img/commande.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            <div className="relative z-10 bg-white bg-opacity-10 p-6 rounded-lg shadow-xl max-w-md w-full my-20">
                <h2 className="text-4xl font-bold mb-8 text-creme">
                    Passer une Commande
                </h2>
                <p className="text-lg text-creme mb-4">
                    Remplissez le formulaire ci-dessous pour passer votre commande.
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
                            name="mealName"
                            value={orderData.mealName}
                            onChange={handleChange}
                            placeholder="Nom du plat"
                            required
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="softDrink"
                            value={orderData.softDrink}
                            onChange={handleChange}
                            placeholder="Boisson"
                            required
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="quantity"
                            value={orderData.quantity}
                            onChange={handleChange}
                            placeholder="Quantité"
                            required
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="tableNumber"
                            value={orderData.tableNumber}
                            onChange={handleChange}
                            placeholder="Numéro de Table"
                            required
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-creme text-black font-bold rounded hover:bg-white transition">
                        Commander
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Commande;
