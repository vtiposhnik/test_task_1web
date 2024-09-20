import { Link } from "react-router-dom";
import { Header1, TruncateText } from "../Typography";
import Art from '/icons/art.svg'
import Play from '/icons/play.svg'
import Bag from '/icons/bag.svg'
import Tools from '/icons/tools.svg'

export default function Categories() {

    const cards = [
        {
            id: '0',
            availability: "Free",
            title: "ChatGPT Writer - Write Email Lorem Ipsum Creli VSIDJLKJF",
            rating: 4.8,
            description: "Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.",
            img: "/card_img.png"
        },
        {
            id: '1',
            availability: "$98",
            title: "ChatGPT Writer #2 - Write Email Lorem Ipsum Creli VSIDJLKJF",
            rating: 4.9,
            description: "Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.",
            img: "/card_img.png"
        },
        {
            id: '2',
            availability: "Freee",
            title: "ChatGPT Writer #3 - Write Email Lorem Ipsum Creli VSIDJLKJF",
            rating: 4.4,
            description: "Write emails, messages, and more using ChatGPT AI (privacy-frendly). Works on all sites.",
            img: "/card_img.png"
        }
    ]

    return (
        <section className="order-1 md:order-2 flex flex-col px-5 md:px-[120px] py-10 mt-10">
            <div>
                <Header1 styles="text-center mb-[30px]">Популярные категории</Header1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="">
                        <Link className="flex justify-center items-center gap-1 font-[700] bg-[#E4D9FF] rounded-[16px] py-4 px-1" to='#'>
                            <span className="mb-[2px]">Покупки</span><i><img className=" size-[20px]" src={Bag} alt="svg" /></i>
                        </Link>
                    </button>
                    <button>
                        <Link className="flex justify-center items-center gap-1 font-[700] bg-[#E4D9FF] rounded-[16px] py-4 px-1" to='#'>
                            <span className="mb-[2px]">Развлечения</span> <i><img className=" size-[20px]" src={Play} alt="svg" /></i>
                        </Link>
                    </button>
                    <button>
                        <Link className="flex justify-center items-center gap-1 font-[700] bg-[#E4D9FF] rounded-[16px] py-4 px-1" to='#'>
                            <span className="mb-[2px]">Инструменты</span> <i><img className=" size-[20px]" src={Tools} alt="svg" /></i>
                        </Link>
                    </button>
                    <button>
                        <Link className="flex justify-center items-center gap-1 font-[700] bg-[#E4D9FF] rounded-[16px] py-4 px-1" to='#'>
                            <span className="mb-[2px]">Искусство</span> <i><img className=" size-[20px]" src={Art} alt="svg" /></i>
                        </Link>
                    </button>
                </div>

                <div className="flex flex-col gap-6 mt-4 md:flex-row">
                    {cards.map((item) => {
                        return (
                            <div className="card border shadow-2xl py-3 rounded-[20px]">
                                <div>
                                    <img src={item.img || '/card_img.png'} alt="card image" />
                                </div>
                                <div className="px-4 py-2 flex flex-col">
                                    <span className="bg-[#E4D9FF] p-2 rounded-[16px] font-[500] text-[18px] w-[25%] text-center">
                                        {item.availability}
                                    </span>
                                    <h2 className="text-[20px] font-[700] mt-3"><TruncateText text={item.title} maxLength={35} /></h2>
                                    <p className="leading-[18px]">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};