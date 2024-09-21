import VK from '/icons/footer/vk.svg'
import Instagram from '/icons/footer/instagram.svg'
import WhatsApp from '/icons/footer/whatsapp.svg'
import Telegram from '/icons/footer/tg.svg'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:flex md:justify-between">
                <div>
                    <h4 className="text-lg font-semibold">Каталог</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Категории</a></li>
                        <li><a href="#" className="hover:underline">Приложения</a></li>
                        <li><a href="#" className="hover:underline">Игры</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold">Информация</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Аккаунт</a></li>
                        <li><a href="#" className="hover:underline">Оплата</a></li>
                        <li><a href="#" className="hover:underline">Центр помощи</a></li>
                        <li><a href="#" className="hover:underline">Партнёрам</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold">Права и политика</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Правила пользования</a></li>
                        <li><a href="#" className="hover:underline">Политика конфиденциальности</a></li>
                    </ul>
                </div>

                <div className="flex justify-center md:justify-end space-x-4">
                    {/* Social media icons */}
                    <a href="#" className="text-gray-400 hover:text-white size-[30px]">
                        <img src={Telegram} alt="Telegram" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white size-[30px]">
                        <img src={VK} alt="VK" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white size-[30px]">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white size-[30px]">
                        <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400">
                <span className='flex flex-col items-center'><img src="/logo.png" alt="App Sphere" width={120} /> @2024</span>
            </div>
        </footer>
    );
}

export default Footer;
