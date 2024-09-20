import { Link } from "react-router-dom";
import { Header1, Paragraph } from "../Typography";

export default function BlackBgCard() {
    return (
        <section>
            <div className="bg-[url('/controller-mobile.png')] md:bg-[url('/controller-pc.png')] bg-cover h-[400px] rounded-[20px] p-6 relative md:flex md:flex-col mt-[70px]">
                <div className="md:w-[60%]">
                    <Header1 styles="text-white">Отдохните от суеты современного мира
                        с нашей подборкой</Header1>
                    <Paragraph styles="text-white">Фильмы, игры, книги и многое другое.</Paragraph>
                    <Link to='#' className='bg-[#E4D9FF] text-[16px] font-[300] w-[260px] rounded-[20px] text-center p-4 absolute bottom-[10%]'>Просмотреть подборку </Link>
                </div>
            </div>
        </section>
    )
};
