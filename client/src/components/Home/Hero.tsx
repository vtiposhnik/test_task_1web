import { Header1, Paragraph, PinkLinkBtn } from "../Typography"

export default function Hero() {
    return (
        <section className="md:order-1 order-2 md:px-[120px]">
            <div id="desktop" className="flex flex-wrap flex-col md:flex-row md:px-20 md:py-10 justify-center items-center">
                <div className="px-4 py-2 md:flex-1 self-center flex flex-col items-center md:items-start gap-4 order-2 md:order-1">
                    <Header1 styles="text-center md:text-left">Присоединяйтесь к нам</Header1>
                    <Paragraph styles="text-center md:text-left text-[14px]">Получите доступ к эксклюзивным предложениям, сохраните избранные приложения и будьте первыми, кто узнает о новинках.</Paragraph>
                    <PinkLinkBtn styles="text-[16px] px-4 py-2 !rounded-[10px] font-[700]">Регистрация</PinkLinkBtn>
                </div>
                <figure className="md:flex-1 md:order-2">
                    <img className="size-[200px] md:size-[400px] mx-auto object-cover" src="/pc_hero.png" alt="a globy" />
                </figure>
            </div>
        </section>
    )
};
