import { Header1 } from '../Typography';
import Cart from '/icons/cart.svg'
import Download from '/icons/load.svg'
import Star from '/icons/star.svg'

const cards = [
  {
    id: 1,
    title: "WhatsApp",
    category: "Социальные сети",
    price: "Бесплатно",
    rating: 3.9,
    imgSrc: "/whats_app.png", // replace with actual image
  },
  {
    id: 2,
    title: "WhatsApp",
    category: "Социальные сети",
    price: "Бесплатно",
    rating: 3.9,
    imgSrc: "/whats_app.png",
  },
  {
    id: 3,
    title: "WhatsApp",
    category: "Социальные сети",
    price: "Бесплатно",
    rating: 3.9,
    imgSrc: "/whats_app.png",
  },
  {
    id: 4,
    title: "WhatsApp",
    category: "Социальные сети",
    price: "Бесплатно",
    rating: 3.9,
    imgSrc: "/whats_app.png",
  }];

export function CardsGrid() {
  return (
    <section className="md:px-[120px] py-10">
      <Header1 styles="mb-3 pl-5">Топ бесплатных</Header1>
      <div className="grid grid-cols-1 gap-4 md:gap-10 lg:grid-cols-2 lg:grid-rows-2 px-4 ">
        {cards.map((card) => (
          <div className="relative flex justify-between p-3 rounded-[20px] bg-[#E4D9FF] md:h-[250px] max-w-[620px] mx-auto">

            <figure className='flex-3 sm:flex-[2] '>
              <img
                src={card.imgSrc}
                alt={card.title}
                className="md:h-[100%] md:flex-shrink-0 "
              />
            </figure>

            <div className='flex flex-2 sm:flex-[3] flex-col justify-between p-3'>
              <div className='flex flex-col items-start gap-2'>
                <h1 className='text-[20px] font-[700]'>WhatsApp</h1>
                <p className='text-[16px]'>Social Media</p>
                <span className='text-[18px] font-[700] bg-white rounded-[20px] px-3 py-1 inline-block'>Free</span>
              </div>

              <div className='flex items-center gap-2'>
                <button className='bg-[#333333CC] rounded-[100px] px-3 py-[6px] flex items-center text-white text-bold gap-2 absolute bottom-4 left-4 md:static md:text-[22px] font-[700]'>{card.rating} <img src={Star} alt="star svg" /></button>
                <button className='bg-[#333333CC] rounded-[100px] px-2 py-1 text-white gap-2 text-[20px] md:text-[24px] font-[700] hidden md:flex md:items-center '>To Cart <img className='' src={Cart} alt="cart svg" /></button>
                <button className='bg-[#333333CC] rounded-[100px] sm:hidden flex items-center gap-2 px-3 py-2'><img src={Cart} alt="cart" /><img src={Download} alt="load svg" /></button>
              </div>

            </div>
          </div>

        ))}
      </div>
      <button className="mt-6 bg-gray-200 px-4 py-2 rounded-lg flex items-center justify-center">
        Показать больше <span className="ml-2">→</span>
      </button>
    </section>
  );
}
