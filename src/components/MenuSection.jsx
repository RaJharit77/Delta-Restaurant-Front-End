import React, { useState } from 'react';

function Menu() {
    const menuItems = [
        {
            id: 1,
            name: 'Pizza Margherita',
            description: 'Une pizza margherita classique avec de la mozzarella fraîche, du basilic et de la sauce tomate.',
            price: 12.99,
            image: '/img/margherita.jpg',
        },
        {
            id: 2,
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti à la pancetta, œuf et parmesan dans une sauce crémeuse.',
            price: 14.99,
            image: '/img/spaghetti.jpg',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Laitue romaine croustillante avec vinaigrette César, croûtons et parmesan.',
            price: 9.99,
            image: '/img/menu1.jpg',
        },
        {
            id: 4,
            name: 'Grilled Salmon',
            description: 'Saumon fraîchement grillé servi avec un accompagnement de légumes et une sauce au beurre citronné.',
            price: 18.99,
            image: '/img/menu3.jpg',
        },
        {
            id: 5,
            name: 'Cheeseburger',
            description: 'Un cheeseburger juteux avec du cheddar, de la laitue, des tomates et des cornichons.',
            price: 11.99,
            image: '/img/cheeseBurger.jpg',
        },
        {
            id: 6,
            name: 'Tiramisu',
            description: 'Un dessert italien classique avec des couches de boudoirs imbibés de café et de crème au mascarpone.',
            price: 6.99,
            image: '/img/tiramisu.jpg',
        },
        {
            id: 7,
            name: 'Panna Cotta',
            description: 'Un dessert italien crémeux à base de crème sucrée épaissie avec de la gélatine.',
            price: 5.99,
            image: '/img/pannaCotta.jpg',
        },
        {
            id: 8,
            name: 'Bruschetta',
            description: 'Pain grillé garni d\'un mélange de tomates hachées, d\'ail et de basilic.',
            price: 7.99,
            image: '/img/bruschetta.jpg',
        },
        {
            id: 9,
            name: 'Foie Gras de Canard poêlé',
            description: 'Servi avec un chutney de figues et une réduction de vin de Porto.',
            price: 7.99,
            image: '/img/foieGras.jpg',
        },
        {
            id: 10,
            name: 'Tartare de Thon Rouge',
            description: 'Rehaussé de gingembre mariné, avocat et huile de sésame grillé.',
            price: 5.99,
            image: '/img/tartareThon.jpg',
        },
        {
            id: 11,
            name: 'Salade de Langoustines au Caviar',
            description: 'Avec une vinaigrette au citron et à l’aneth, et des pousses de roquette.',
            price: 7.99,
            image: '/img/saladeLang.jpg',
        },
        {
            id: 12,
            name: 'Ceviche de Bar',
            description: 'Mariné au citron vert avec de la coriandre, du piment doux et des oignons rouges.',
            price: 7.99,
            image: '/img/ceviche.jpg',
        },
        {
            id: 13,
            name: 'Filet de Bœuf Rossini',
            description: 'Garni de foie gras poêlé, servi avec une sauce au vin rouge et des légumes de saison.',
            price: 5.99,
            image: '/img/filetBoeuf.jpg',
        },
        {
            id: 14,
            name: 'Carré d\'Agneau en Croûte d\'Herbes',
            description: 'Accompagné d\'un gratin dauphinois et de carottes glacées.',
            price: 7.99,
            image: '/img/carreAgneau.jpg',
        },
        {
            id: 15,
            name: 'Risotto à la Truffe Blanche',
            description: 'Préparé avec du riz Arborio, du parmesan vieilli et des copeaux de truffe blanche.',
            price: 7.99,
            image: '/img/risotto.jpg',
        },
        {
            id: 16,
            name: 'Fondant au Chocolat Cœur Coulant',
            description: 'Servi avec une glace à la vanille de Madagascar.',
            price: 5.99,
            image: '/img/vanilleMada.jpg',
        },
        {
            id: 17,
            name: 'Tartelette aux Fruits Rouges et Crème Pâtissière',
            description: 'Avec une fine pâte sablée et une touche de menthe fraîche.',
            price: 7.99,
            image: '/img/tartelette.jpg',
        },
        {
            id: 19,
            name: 'Soufflé au Grand Marnier',
            description: 'Accompagné d\'une sauce à l’orange confite.',
            price: 7.99,
            image: '/img/tarteletteMini.jpg',
        },
    ];

    const [showAll, setShowAll] = useState(false);
    const [showDessert, setShowDessert] = useState(false);

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
                            {showDessert ? 'Retour au Menu Principal' : 'Besoin d\'autre chose ?'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
