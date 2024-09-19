import React from 'react';

function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-black text-white">
            <div className="text-lg font-bold">AppSphere</div>
            <nav className="flex space-x-4">
                <a href="#" className="hover:text-purple-400">Главная</a>
                <a href="#" className="hover:text-purple-400">Магазин</a>
                <a href="#" className="hover:text-purple-400">FAQ</a>
            </nav>
            <div className="flex space-x-4">
                <button className="bg-purple-400 text-white px-4 py-2 rounded">Авторизация</button>
            </div>
        </header>
    );
}

export default Header;
