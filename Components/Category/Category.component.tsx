import Image from "next/image";
import s from "./Category.component.module.scss";

import img from "@/assets/react.webp";

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
        <div className={s.categoryContainer__categoryList__wrapper}>
          <div className={s.categoryContainer__categoryList__wrapper__header}>
            <Image
              className={
                s.categoryContainer__categoryList__wrapper__header__img
              }
              src={img}
              width={250}
              height={150}
              alt="category image"
            />
            <h3
              className={
                s.categoryContainer__categoryList__wrapper__header__title
              }
            >
              React
            </h3>
          </div>
          <div
            className={s.categoryContainer__categoryList__wrapper__description}
          >
            <p
              className={
                s.categoryContainer__categoryList__wrapper__description__p
              }
            >
              Posty o tej tematyce będą związane z najpopularniejszym
              frameworkiem w JavaScript. Chcesz dowiedzieć się więcej ?{" "}
            </p>
          </div>
          <div
            className={
              s.categoryContainer__categoryList__wrapper__buttonWrapper
            }
          >
            <button
              className={
                s.categoryContainer__categoryList__wrapper__buttonWrapper__btn
              }
            >
              Zobacz
            </button>
          </div>
        </div>
        <div className={s.categoryContainer__categoryList__wrapper}>
          <div className={s.categoryContainer__categoryList__wrapper__header}>
            <Image
              className={
                s.categoryContainer__categoryList__wrapper__header__img
              }
              src={img}
              width={250}
              height={150}
              alt="category image"
            />
            <h3
              className={
                s.categoryContainer__categoryList__wrapper__header__title
              }
            >
              React
            </h3>
          </div>
          <div
            className={s.categoryContainer__categoryList__wrapper__description}
          >
            <p
              className={
                s.categoryContainer__categoryList__wrapper__description__p
              }
            >
              Posty o tej tematyce będą związane z najpopularniejszym
              frameworkiem w JavaScript. Chcesz dowiedzieć się więcej ?{" "}
            </p>
          </div>
          <div
            className={
              s.categoryContainer__categoryList__wrapper__buttonWrapper
            }
          >
            <button
              className={
                s.categoryContainer__categoryList__wrapper__buttonWrapper__btn
              }
            >
              Zobacz
            </button>
          </div>
        </div>
        <div className={s.categoryContainer__categoryList__wrapper}>
          <div className={s.categoryContainer__categoryList__wrapper__header}>
            <Image
              className={
                s.categoryContainer__categoryList__wrapper__header__img
              }
              src={img}
              width={250}
              height={150}
              alt="category image"
            />
            <h3
              className={
                s.categoryContainer__categoryList__wrapper__header__title
              }
            >
              React
            </h3>
          </div>
          <div
            className={s.categoryContainer__categoryList__wrapper__description}
          >
            <p
              className={
                s.categoryContainer__categoryList__wrapper__description__p
              }
            >
              Posty o tej tematyce będą związane z najpopularniejszym
              frameworkiem w JavaScript. Chcesz dowiedzieć się więcej ?{" "}
            </p>
          </div>
          <div
            className={
              s.categoryContainer__categoryList__wrapper__buttonWrapper
            }
          >
            <button
              className={
                s.categoryContainer__categoryList__wrapper__buttonWrapper__btn
              }
            >
              Zobacz
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Category;
