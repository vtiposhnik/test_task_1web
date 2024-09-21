import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'
import { Paragraph, PinkLinkBtn } from './Typography';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        setIsLogged(false)
    };

    return (
        <header className=''>
            <div className='m-4 flex items-center justify-between md:m-0 md:bg-[#333333] md:px-[100px] md:py-[40px] text-[#FFFEED]'>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden ">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Logo */}
                <Link to='#' className='block order-2 md:hidden'><img width={200} height={32} src="/logo.png" alt="a logo" /></Link>

                {/* Navigation Links */}
                <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:justify-between w-full`}>
                    <ul className='block md:flex justify-between items-center gap-4 text-[24px] font-[400]'>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Магазин</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>

                    <div className='hidden md:block self-center'><img width={200} height={32} src="/logo.png" alt="logo" /></div>

                    {/* Before Login */}
                    {!isLogged ? <PinkLinkBtn styles='rounded-[10px] p-2 text-black opacity-70' path="/auth">Авторизация</PinkLinkBtn> : <div>
                        <Link to="/profile">Профиль</Link>
                        <Link to="/cart">Корзина</Link>
                    </div>}

                </nav>

            </div>

            <div id="mobile" className="md:hidden h-[50vh]">
                <Paragraph styles="pt-5 pl-5 w-[50%] text-left text-white">
                    Ваш
                    уникальный шанс открыть для себя
                    лучшие веб-приложения
                    на рынке.
                </Paragraph>
                <div className="absolute z-[-51] bg-[#333333] h-[70vh] w-[100%] top-0 rounded-b-[20px] md:hidden"></div>
                <div className="absolute left-[35%] top-[20%] z-[-50]">
                    <img className="relative top-[180px] left-[-50px] w-[300] h-[100]" src="/logo.png" alt="" />
                    <img className="size-[214px] h-auto" src="/mobile_hero.png" alt="man on a chair" />
                </div>
                <PinkLinkBtn styles="absolute top-[380px] left-[30%] px-4 py-2 font-[700] rounded-[10px]">Авторизация</PinkLinkBtn>
            </div>
        </header>
    );
}

export default Header;