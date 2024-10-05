import React, { useEffect, useState } from 'react';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showDessert, setShowDessert] = useState(false);

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || 'https://delta-restaurant-back-end.onrender.com';

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/menu`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div
            id="menu"
            className="relative my-0 w-full bg-center bg-cover"
            style={{ backgroundImage: `url(/img/menuP.jpg)` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative py-12">
                <h2 className="text-4xl text-creme dark:text-white font-bold mb-8 text-center">
                    Notre Menu
                </h2>

                {!showDessert ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto cursor-pointer">
                            {Array.isArray(menuItems) && menuItems.slice(0, showAll ? menuItems.length : 6).map(item => (
                                <div
                                    key={item.id}
                                    className="bg-emerald-600 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out"
                                    style={{ height: '400px', width: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
                                    <div className="p-4 flex-grow">
                                        <h3 className="text-lg font-bold mb-2 dark:text-gray-300">{item.name}</h3>
                                        <p className="text-sm mb-2 dark:text-gray-400">{item.description}</p>
                                        <p className="text-lg font-bold dark:text-gray-300">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <img src="/img/menuRestaurant.png" alt="Autre Menu" className="mx-auto w-full max-w-xs h-auto rounded-lg shadow-lg" />
                    </div>
                )}

                <div className="text-center mt-8">
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-emerald-700 text-black px-4 py-2 rounded hover:bg-emerald-600 transition-colors duration-300"
                        >
                            {showAll ? 'Voir Moins' : 'Voir Tout'}
                        </button>

                        <button
                            onClick={() => setShowDessert(!showDessert)}
                            className="bg-emerald-700 text-black px-4 py-2 rounded hover:bg-emerald-600 transition-colors duration-300"
                        >
                            {showDessert ? 'Retour au Menu' : 'Besoin d\'autre chose ?'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
