import React from 'react';

function Contact() {
    return (
        <div
            id="contact"
            className="relative py-16 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../public/img/contact.jpg')`,
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-creme sm:text-4xl sm:leading-10">
                        Contactez-nous
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
                        N'hésitez pas à nous contacter pour toute question sur nos services ou autre chose.
                    </p>
                </div>

                <div className="mt-12 lg:flex lg:justify-between lg:items-start">
                    <div className="lg:w-1/2 lg:pr-8">
                        <form className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 shadow-lg rounded-lg p-8">
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600"
                                    placeholder="Votre email"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600"
                                    placeholder="Sujet"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600"
                                    placeholder="Votre message..."
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-600 transition-colors duration-300"
                                >
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
                        <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 shadow-lg rounded-lg p-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Coordonnées</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-700 mb-4">
                                Vous pouvez également nous contacter directement à notre adresse ou par téléphone.
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Adresse :</span>{' '}
                                    123 Rue de la Gastronomie, 75001 Paris, France
                                </li>
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Téléphone :</span>{' '}
                                    +33 1 23 45 67 89
                                </li>
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Email :</span>{' '}
                                    contact@restaurant-exemple.com
                                </li>
                            </ul>

                            <div className="mt-8">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Localisation</h4>
                                <div className="relative h-64">
                                    <img
                                        src="/img/carte.png"
                                        alt="Carte de localisation"
                                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
