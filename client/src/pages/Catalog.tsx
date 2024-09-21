import { CardsGrid } from "../components/Catalog/CardsGrid";
import BlackBgCard from "../components/Home/BlackBgCard";
import Categories from "../components/Home/Categories";

export default function Catalog() {
    return (
        <section>
            <Categories />
            <CardsGrid />
            <BlackBgCard  mobileUrl="/catalog/mobile_atom_bg.png" pcUrl="/catalog/pc_atom_bg.png" header="Всё для продуктивности" paragraph="Работайте по-новому с новыми помощниками на любой вкус - нейросетями."  />
        </section>
    )
};
