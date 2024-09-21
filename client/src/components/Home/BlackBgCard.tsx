import { Link } from "react-router-dom";
import { Header1, Paragraph } from "../Typography";

interface IBlackBgCard {
    mobileUrl: string,
    pcUrl: string,
    header: string,
    paragraph: string
}

export default function BlackBgCard({ mobileUrl, pcUrl, header, paragraph }: IBlackBgCard) {
    console.log(mobileUrl)
    return (
        <section className="md:px-[120px] py-10 md:order-3 px-4">
            <div style={{ backgroundImage: `url(${window.innerWidth >= 768 ? pcUrl : mobileUrl})` }}
                className={`!bg-cover h-[400px] rounded-[20px] p-6 relative md:flex md:flex-col mt-[70px]`}>
                <div className="md:w-[60%]">
                    <Header1 styles="text-white">{header}</Header1>
                    <Paragraph styles="text-white">{paragraph}</Paragraph>
                    <Link to='#' className='bg-[#E4D9FF] text-[16px] font-[300] w-[260px] rounded-[20px] text-center p-4 absolute bottom-[10%] opacity-85 transition-all duration-300 hover:opacity-100 hover:bg-[#d9cafc]'>Просмотреть подборку </Link>
                </div>

            </div>
        </section>
    )
};
