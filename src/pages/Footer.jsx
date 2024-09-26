import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../public/img/delta.png';

function Footer() {
    return (
        <footer className="transition bg-black text-creme py-6 relative">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex flex-col items-start ml-7">
                    <a href="#" className="w-24 h-24 rounded-full overflow-hidden mb-5 mx-auto">
                        <img src={logo} alt="Delta Restaurant Logo" className="w-full h-full object-cover" />
                    </a>
                    <p className="text-white text-center">
                        Delta Restaurant
                    </p>
                </div>

                <div className="flex space-x-6 justify-end mr-8">
                    <a href="#" className="text-creme hover:text-or">
                        <FontAwesomeIcon icon={faFacebook} size="2xl" />
                    </a>
                    <a href="#" className="text-creme hover:text-or">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="#" className="text-creme hover:text-or">
                        <FontAwesomeIcon icon={faXTwitter} size="2xl" />
                    </a>
                    <a href="#" className="text-creme hover:text-or">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full text-center bg-black py-4">
                <p>&copy; {new Date().getFullYear()} Delta Restaurant. All rights reserved. Created by RaJharit77</p>
            </div>
        </footer>
    );
}

export default Footer;
