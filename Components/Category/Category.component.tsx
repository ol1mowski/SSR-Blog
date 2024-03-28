import Image from "next/image";
import s from "./Category.component.module.scss";

import img from "@/assets/react.webp";

function Category() {
  return (
    <section className={s.categoryContainer}>
      <section className={s.categoryContainer__header}>
        <h2 className={s.categoryContainer__header__title}>Categories</h2>
        <p className={s.categoryContainer__header__content}>
          Discover the latest articles from the categories that interest you 🚀
        </p>
      </section>
      <section className={s.categoryContainer__content}>
        <div className={s.categoryContainer__content__imageWrapper}>
          <Image
            className={s.categoryContainer__content__imageWrapper__img}
            src={img}
            alt=""
            width={200}
            height={150}
          />
          <div className={s.categoryContainer__content__imageWrapper__text}>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__header
              }
            >
              React Tutorial
            </p>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__subtitle
              }
            >
              10 articles
            </p>
          </div>
        </div>{" "}
        <div className={s.categoryContainer__content__imageWrapper}>
          <Image
            className={s.categoryContainer__content__imageWrapper__img}
            src={img}
            alt=""
            width={200}
            height={150}
          />
          <div className={s.categoryContainer__content__imageWrapper__text}>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__header
              }
            >
              React Tutorial
            </p>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__subtitle
              }
            >
              10 articles
            </p>
          </div>
        </div>{" "}
        <div className={s.categoryContainer__content__imageWrapper}>
          <Image
            className={s.categoryContainer__content__imageWrapper__img}
            src={img}
            alt=""
            width={200}
            height={150}
          />
          <div className={s.categoryContainer__content__imageWrapper__text}>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__header
              }
            >
              React Tutorial
            </p>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__subtitle
              }
            >
              10 articles
            </p>
          </div>
        </div>{" "}
        <div className={s.categoryContainer__content__imageWrapper}>
          <Image
            className={s.categoryContainer__content__imageWrapper__img}
            src={img}
            alt=""
            width={200}
            height={150}
          />
          <div className={s.categoryContainer__content__imageWrapper__text}>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__header
              }
            >
              React Tutorial
            </p>
            <p
              className={
                s.categoryContainer__content__imageWrapper__text__subtitle
              }
            >
              10 articles
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Category;
