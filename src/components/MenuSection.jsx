import React, { useState } from 'react';

function Menu() {
    const menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'A classic margherita pizza with fresh mozzarella, basil, and tomato sauce.',
            price: 12.99,
            image: '/img/menu4.jpg',
        },
        {
            id: 2,
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti with pancetta, egg, and Parmesan in a creamy sauce.',
            price: 14.99,
            image: '/img/menu5.jpg',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
            price: 9.99,
            image: '/img/menu1.jpg',
        },
        {
            id: 4,
            name: 'Grilled Salmon',
            description: 'Freshly grilled salmon served with a side of vegetables and lemon butter sauce.',
            price: 18.99,
            image: '/img/menu3.jpg',
        },
        {
            id: 5,
            name: 'Cheeseburger',
            description: 'A juicy cheeseburger with cheddar cheese, lettuce, tomato, and pickles.',
            price: 11.99,
            image: '/img/menu2.jpg',
        },
        {
            id: 6,
            name: 'Tiramisu',
            description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
            price: 6.99,
            image: '/img/menu6.jpg',
        },
        {
            id: 7,
            name: 'Panna Cotta',
            description: 'A creamy Italian dessert made from sweetened cream thickened with gelatin.',
            price: 5.99,
            image: '/img/menu7.jpg',
        },
        {
            id: 8,
            name: 'Bruschetta',
            description: 'Toasted bread topped with a mixture of chopped tomatoes, garlic, and basil.',
            price: 7.99,
            image: '/img/menu8.jpg',
        },
    ];

    const [showAll, setShowAll] = useState(false);
    const [showDessert, setShowDessert] = useState(false);

    return (
        <div
            id="menu"
            className="relative my-0 w-full bg-center bg-cover"
            style={{ backgroundImage: `url(/img/menu1.jpg)` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative py-12">
                <h2 className="text-4xl text-creme dark:text-white font-bold mb-8 text-center">
                    Notre Menu
                </h2>

                {!showDessert ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto cursor-pointer">
                            {menuItems.slice(0, showAll ? menuItems.length : 6).map(item => (
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
                        <img src="/img/menuRestaurant.png" alt="Menu de dessert" className="mx-auto w-96 h-auto rounded-lg shadow-lg" />
                    </div>
                )}

                <div className="text-center mt-8">
                    <div className="flex justify-center space-x-4"> {/* Ajout de la flexbox pour aligner les boutons */}
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
                            {showDessert ? 'Retour au Menu Principal' : 'Besoin d\'autre chose ?'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
