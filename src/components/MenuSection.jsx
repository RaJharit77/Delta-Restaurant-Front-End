import React, { useEffect, useState } from 'react';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://delta-restaurant-backend.onrender.com/api/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data));
    }, []);

    return (
        <div id="menu" className="my-12 w-full">
            <h2 className="text-4xl text-blue-800 dark:text-white font-bold mb-8 text-center">Our Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                {menuItems.map(item => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 dark:text-gray-300">{item.name}</h3>
                            <p className="text-sm mb-2 dark:text-gray-400">{item.description}</p>
                            <p className="text-lg font-bold dark:text-gray-300">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
