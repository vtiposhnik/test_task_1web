import { Header1, Paragraph, PinkLinkBtn} from "../Typography"

export default function Hero() {
    return (
        <section className="h-[100vh]">
            <div id="desktop" className="flex px-20 py-10">
                <div className="flex-1 self-center">
                    <Header1 styles="hidden md:block">Join Us</Header1>
                    <Paragraph styles="hidden md:block">Получите доступ к эксклюзивным предложениям, сохраните избранные приложения и будьте первыми, кто узнает о новинках.</Paragraph>
                    <PinkLinkBtn styles="hidden md:block">Register</PinkLinkBtn>
                </div>
                <figure className="flex-1">
                    <img className="size-[400px] hidden md:block h-auto mx-auto" src="/pc_hero.png" alt="a globy" />
                </figure>
            </div>

            <div id="mobile" className="md:hidden">
                <Paragraph styles="pt-5 pl-5 w-[50%] text-left text-white">
                    Ваш
                    уникальный шанс открыть для себя
                    лучшие веб-приложения
                    на рынке.
                </Paragraph>
                <div className="absolute z-[-51] bg-[#333333] h-[70vh] w-[100%] top-0 md:hidden"></div>
                <div className="absolute left-[35%] top-[20%] z-[-50]">
                    <img className="relative top-[180px] left-[-50px] w-[300] h-[100]" src="/logo.png" alt="" />
                    <img className="size-[214px] h-auto" src="/mobile_hero.png" alt="man on a chair" />
                </div>
                <PinkLinkBtn styles="absolute top-[400px] left-[40%]">Authorize</PinkLinkBtn>
            </div>
        </section>
    )
};
