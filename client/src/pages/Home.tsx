import BlackBgCard from "../components/Home/BlackBgCard";
import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import Reviews from "../components/Home/Reviews";

export default function Home() {
    return (
        <section className="flex flex-col">
            <Hero />
            <Categories />
            <BlackBgCard mobileUrl='/controller-mobile.png' pcUrl="/controller-pc.png" header="Отдохните от суеты современного мира
                        с нашей подборкой" paragraph="Фильмы, игры, книги и многое другое." />
            <Reviews />
        </section>
    )
};
