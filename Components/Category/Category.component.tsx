import s from "./Category.component.module.scss";

import CategoryComponent from "./Category-component/Category-Component.component";
import { CATEGORY_LIST } from "@/data/Category.data";
import { fetchElements } from "@/utils/https";
import { StaticImageData } from "next/image";

const Category = async () => {
  const fetchItems = await fetchElements("Blog");

  type DataValue = { id: string, data: [{ id: string, title: string, description: string, image: StaticImageData }] };

  const categoriesItem: DataValue = fetchItems.find((item) => item.id === "categories");

  if (!categoriesItem) {
    throw new Error("Could not find");
  }

  return (
    <section className={s.categoryContainer}>
      <section className={s.categoryContainer__content}>
        <div className={s.categoryContainer__content__title}>
          <h1 className={s.categoryContainer__content__title__h1}>
            Wybierz kategorię
          </h1>
        </div>
        <div className={s.categoryContainer__content__description}>
          <p className={s.categoryContainer__content__description__p}>
            Znajdziesz tu konkrety o pracy w branży it, Najnowocześniejsze
            rozwiązania w branży, oraz praktyczne porady i wiele więcej
          </p>
        </div>
      </section>
      <section className={s.categoryContainer__categoryList}>
        {categoriesItem.data.map((c) => (
          <CategoryComponent
            key={c.id}
            id={c.id}
            header={c.title}
            description={c.description}
            img={c.image}
          />
        ))}
      </section>
    </section>
  );
};

export default Category;
