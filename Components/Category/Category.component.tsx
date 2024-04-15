import s from "./Category.component.module.scss";

import CategoryComponent from "./Category-component/Category-Component.component";
import { CATEGORY_LIST } from "@/data/Category.data";

const Category = () => {
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
        {CATEGORY_LIST.map((c) => (
          <CategoryComponent
            key={c.id}
            header={c.header}
            description={c.description}
            img={c.img}
          />
        ))}
      </section>
    </section>
  );
};

export default Category;
