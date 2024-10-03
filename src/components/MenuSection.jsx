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
            price: 15.79,
            image: '/img/foieGras.jpg',
        },
        {
            id: 10,
            name: 'Tartare de Thon Rouge',
            description: 'Rehaussé de gingembre mariné, avocat et huile de sésame grillé.',
            price: 14.55,
            image: '/img/tartareThon.jpg',
        },
        {
            id: 11,
            name: 'Salade de Langoustines au Caviar',
            description: 'Avec une vinaigrette au citron et à l’aneth, et des pousses de roquette.',
            price: 9.99,
            image: '/img/saladeLang.jpg',
        },
        {
            id: 12,
            name: 'Ceviche de Bar',
            description: 'Mariné au citron vert avec de la coriandre, du piment doux et des oignons rouges.',
            price: 13.39,
            image: '/img/ceviche.jpg',
        },
        {
            id: 13,
            name: 'Filet de Bœuf Rossini',
            description: 'Garni de foie gras poêlé, servi avec une sauce au vin rouge et des légumes de saison.',
            price: 10.99,
            image: '/img/filetBoeuf.jpg',
        },
        {
            id: 14,
            name: 'Carré d\'Agneau en Croûte d\'Herbes',
            description: 'Accompagné d\'un gratin dauphinois et de carottes glacées.',
            price: 17.99,
            image: '/img/carreAgneau.jpg',
        },
        {
            id: 15,
            name: 'Risotto à la Truffe Blanche',
            description: 'Préparé avec du riz Arborio, du parmesan vieilli et des copeaux de truffe blanche.',
            price: 7.77,
            image: '/img/risotto.jpg',
        },
        {
            id: 16,
            name: 'Fondant au Chocolat Cœur Coulant',
            description: 'Servi avec une glace à la vanille de Madagascar.',
            price: 8.29,
            image: '/img/fondantChocolatVanilleMada.jpg',
        },
        {
            id: 17,
            name: 'Tartelette aux Fruits Rouges et Crème Pâtissière',
            description: 'Avec une fine pâte sablée et une touche de menthe fraîche.',
            price: 11.99,
            image: '/img/tarteletteRougeCreme.jpg',
        },
        {
            id: 18,
            name: 'Soufflé au Grand Marnier',
            description: 'Accompagné d\'une sauce à l’orange confite.',
            price: 16.57,
            image: '/img/marnier.jpg',
        },
        {
            id: 19,
            name: 'Sole Meunière',
            description: 'Poêlée au beurre citronné, servie avec des pommes de terre vapeur et des asperges.',
            price: 12.07,
            image: '/img/soleMenuiere.jpg',
        },
        {
            id: 20,
            name: 'Magret de Canard aux Cerises',
            description: 'Arrosé d\'une sauce au vin rouge et aux cerises noires, avec purée de céleri-rave.',
            price: 18.56,
            image: '/img/magret.jpg',
        },
        {
            id: 21,
            name: 'Filet de Bar en Croûte de Sel',
            description: 'Accompagné d\'une sauce beurre blanc, servi avec des épinards frais et un risotto crémeux.',
            price: 15.59,
            image: '/img/filetBar.jpg',
        },
        {
            id: 22,
            name: 'Millefeuille à la Vanille Bourbon',
            description: 'Superposé avec une crème diplomate légère et une feuille de sucre croquante.',
            price: 12.77,
            image: '/img/millefeuille.jpg',
        },
        {
            id: 23,
            name: 'Île Flottante au Caramel Beurre Salé',
            description: 'Sur un lit de crème anglaise vanillée, avec des amandes effilées caramélisées.',
            price: 10.37,
            image: '/img/îleFlottant.jpg',
        },
        {
            id: 24,
            name: 'Assiette de Fromages Affinés',
            description: 'Sélection de fromages français et internationaux avec fruits secs et pain de campagne.',
            price: 13.99,
            image: '/img/assietteFromage.jpg',
        },
        {
            id: 25,
            name: 'Gratin de Pommes de Terre à la Truffe',
            description: 'G',
            price: 12.12,
            image: '/img/gratinPommeDeTerre.jpg',
        },
        {
            id: 26,
            name: 'Légumes Rôtis au Beurre Noisette',
            description: 'L',
            price: 10.97,
            image: '/img/LegumesRôtis.jpg',
        },
        {
            id: 27,
            name: 'Purée de Panais et Pommes de Terre',
            description: 'P',
            price: 6.99,
            image: '/img/pureeDePanais.jpg',
        },
        {
            id: 28,
            name: 'Risotto aux Champignons Sauvages',
            description: 'R',
            price: 11.07,
            image: '/img/risottoChampignonsSauvage.jpg',
        },
        {
            id: 29,
            name: 'Asperges Vertes Grillées',
            description: 'A',
            price: 10.10,
            image: '/img/aspergesVertes.jpg',
        },
        {
            id: 30,
            name: 'Champagne Dom Pérignon Millésimé',
            description: 'Un vin effervescent réalisé grâce à l\'assemblage de raisins récoltés lors d\'une seule et même année.',
            price: 10.77,
            image: '/img/champagne.jpg',
        },
        {
            id: 31,
            name: 'Vin Blanc Sancerre',
            description: ' Un vin d\'appellation d\'origine contrôlé situé le long de la Loire, dans le Cher. ',
            price: 12.87,
            image: '/img/vinBlancSancerre.jpg',
        },
        {
            id: 32,
            name: 'Vin Rouge Château Margaux',
            description: 'Finesse, élégance et complexité sont les caractéristiques des vins de Château Margaux.',
            price: 13.79,
            image: '/img/châteauMargaux.jpg',
        },
        {
            id: 33,
            name: 'Cocktail Bellini (Prosecco & Purée de Pêche Blanche)',
            description: 'C',
            price: 11.97,
            image: '/img/cocktailBellini.jpg',
        },
        {
            id: 34,
            name: 'Eau Minérale Plate ou Gazeuse',
            description: ' E',
            price: 14.87,
            image: '/img/eauMinerale.jpg',
        },
        {
            id: 35,
            name: 'Eau Minérale Plate ou Gazeuse',
            description: ' E',
            price: 13.40,
            image: '/img/eauMinerale.jpg',
        },
        {
            id: 36,
            name: 'Eau Minérale Plate ou Gazeuse',
            description: ' E',
            price: 12.17,
            image: '/img/eauMinerale.jpg',
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
