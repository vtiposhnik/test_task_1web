import { Header1, Paragraph } from "../Typography";

export default function Reviews() {
    return (
        <section className="order-3 md:px-[120px] py-10">
            <Header1>Отзывы наших клиентов</Header1>
            <div className=" py-6 flex flex-col gap-4 md:flex-row">
                <div className="rounded-[20px] p-4 bg-[#E4D9FF]">
                    <figure className="p-4">
                        <img src="/review1.png" alt="a girl on a phone" />
                    </figure>
                    <div className="text-center">
                        <Paragraph styles="!text-[16px]">
                            Этот сайт – глоток свежего воздуха в мире веб-приложений! Он интуитивно понятен, увлекателен и полон возможностей.
                        </Paragraph>
                        <span className="text-[14px] font-[700]">Команда Women in IT</span>
                    </div>
                </div>
                <div className="rounded-[20px] p-4 bg-[#E4D9FF]">
                    <figure className="p-4">
                        <img src="/review2.png" alt="girl and two boys" />
                    </figure>
                    <div className="text-center">
                        <Paragraph styles="!text-[16px]">
                            Это универсальный магазин для всех ваших потребностей в веб-приложениях, настоящий прорыв!
                        </Paragraph>
                        <span className="text-[14px] font-[700]">WEBWORKS</span>
                    </div>
                </div>
            </div>
        </section>
    )
};
