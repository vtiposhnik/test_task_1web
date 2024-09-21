
export default function AuthForm() {
    return (
        <div className="md:px-20 py-10 gap-8 grid grid-cols-1 md:grid-cols-2 ">
            <div className="bg-[#333333] text-white p-8 rounded-lg shadow-lg w-full mb-8 md:mb-0">
                <h2 className="text-2xl mb-6">Авторизация</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">
                            E-mail:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 text-gray-900 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 text-gray-900 rounded-md" />
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-purple-400 hover:underline">
                            Забыли пароль?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
                    >
                        Войти
                    </button>
                </form>
            </div>

            <div className="bg-[#E4D9FF] text-[#333333] p-8 rounded-lg shadow-lg w-full flex flex-col justify-between gap-4">
                <div>
                    <h2 className="text-[40px] font-[500]">Я - новый покупатель</h2>
                    <p className="text-[20px] opacity-90">
                        Регистрация на сайте позволит быстро оформлять заказы, управлять
                        заказами через личный кабинет, в полном объеме использовать
                        возможности нашего интернет магазина.
                    </p>
                </div>
                <button className="w-full bg-[#393939] text-[#E4D9FF] text-[20px] font-bold py-2 rounded-[10px] hover:bg-[#242424] transition duration-300">
                    Регистрация
                </button>
            </div>
        </div>
    );
}
