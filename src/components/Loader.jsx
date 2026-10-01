import { FaUtensils } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Loader({ message = 'Chargement en cours...', fullScreen = false }) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 ${
                fullScreen ? 'min-h-screen' : 'py-24'
            } bg-gray-50`}
        >
            <div className="relative flex items-center justify-center w-24 h-24">
                <span
                    className="absolute inline-block w-24 h-24 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin"
                    aria-hidden="true"
                />
                <span
                    className="absolute inline-block w-16 h-16 rounded-full border-4 border-emerald-100 border-b-emerald-500 animate-spin"
                    style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
                    aria-hidden="true"
                />
                <FaUtensils
                    className="text-emerald-600 w-8 h-8 animate-pulse"
                    aria-hidden="true"
                />
            </div>

            <p className="text-emerald-700 font-medium text-lg tracking-wide animate-pulse">
                {message}
            </p>
        </div>
    );
}

Loader.propTypes = {
    message: PropTypes.string,
    fullScreen: PropTypes.bool,
};

export default Loader;