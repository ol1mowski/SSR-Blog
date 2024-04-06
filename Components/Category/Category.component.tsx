import Image from "next/image";
import s from "./Category.component.module.scss";

import img from "@/assets/react.webp";

import imgEdu from "@/assets/edu.jpg";
import imgProg from "@/assets/prog.jpg";

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
              Praktyczne wskazówki, tutoriale i analizy dotyczące wykorzystania
              React w projektach.
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
              src={imgEdu}
              width={250}
              height={150}
              alt="category image"
            />
            <h3
              className={
                s.categoryContainer__categoryList__wrapper__header__title
              }
            >
              Materiały Edukacyjne
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
              Zestawy narzędzi, kursy online i inne materiały, które pomogą Ci w
              rozwoju jako programista. 😉
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
              src={imgProg}
              width={250}
              height={150}
              alt="category image"
            />
            <h3
              className={
                s.categoryContainer__categoryList__wrapper__header__title
              }
            >
              Programowanie Ogólne
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
              Wprowadzenie do różnych języków i koncepcji programowania dla
              początkujących.
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
