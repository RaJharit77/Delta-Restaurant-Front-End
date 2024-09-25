import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
    return (
        <footer className="transition bg-transparent dark:bg-blue-800 text-yellow-400 py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Section pour l'image arrondie et le texte en dessous */}
                <div className="flex flex-col items-center w-1/3">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
                        <img src="../../public/img/delta.png" alt="deltaImage" />
                    </div> {/* Image arrondie */}
                    <p className="text-center text-white">
                        Delta Restaurant
                    </p>
                </div>

                {/* Section Copyright */}
                <div className="w-1/3 text-center">
                    <p className="mb-4">&copy; {new Date().getFullYear()} Delta Restaurant. All rights reserved.</p>
                </div>

                {/* Section des icônes de réseaux sociaux */}
                <div className="flex space-x-4 justify-end w-1/3">
                    <a href="#" className="text-red-500 hover:text-yellow-400">
                        <FontAwesomeIcon icon={faFacebook} size="xl" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-yellow-400">
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-yellow-400">
                        <FontAwesomeIcon icon={faXTwitter} size="xl" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-yellow-400">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
