import React from 'react';
import backgroundImage from '../assets/img/about.jpg';

function About() {
    return (
        <div
            id='about'
            className="relative bg-cover bg-center text-noir py-12 px-6 sm:px-4 lg:px-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-creme mb-4">À propos de Delta Restaurant</h1>
                    <p className="text-xl text-creme">
                        Une expérience culinaire inoubliable dans un cadre raffiné.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre histoire</h2>
                    <p className="text-lg text-gray-300">
                        Depuis son ouverture, Delta Restaurant a pour mission d’offrir une expérience gastronomique exceptionnelle à ses convives. Fondé par des passionnés de la cuisine et de l’hospitalité, notre établissement s’est rapidement imposé comme une référence dans la cuisine de luxe.
                        Nous croyons que la meilleure façon de célébrer la gastronomie est d’offrir des plats d’une qualité incomparable, préparés avec des ingrédients soigneusement sélectionnés et un savoir-faire unique.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre mission</h2>
                    <p className="text-lg text-gray-300">
                        Chez Delta Restaurant, notre mission est simple : offrir une cuisine de luxe dans un cadre accueillant et élégant. Chaque plat que nous servons est le fruit d’une recherche passionnée de saveurs, d’innovation et de qualité. Nous nous engageons à offrir à nos clients une expérience mémorable, où chaque détail compte.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre équipe</h2>
                    <p className="text-lg text-gray-300">
                        Notre équipe est composée de chefs renommés, de sommeliers passionnés, et de professionnels du service dédiés à faire de votre repas une expérience inoubliable. Ensemble, nous partageons une passion pour l'excellence culinaire et un profond respect pour l’art de la table.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">L'expérience Delta</h2>
                    <p className="text-lg text-gray-300">
                        En entrant dans Delta Restaurant, vous serez accueilli dans un cadre alliant tradition et modernité. Nos espaces élégants sont conçus pour offrir une atmosphère chaleureuse et intime, que ce soit pour un dîner romantique ou une célébration spéciale. Nous croyons que chaque moment passé dans notre établissement doit être synonyme de plaisir, de confort, et de raffinement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
