import Image from "next/image";
import s from "./Homepage.component.module.scss";

import img from "@/assets/gif.gif";

const HomepageComponent = () => {
  return (
    <section className={s.homepageContainer}>
      <section className={s.homepageContainer__image}>
        <div className={s.homepageContainer__image__imageWrapper}>
          <Image
            className={s.homepageContainer__image__imageWrapper__img}
            src={img}
            alt=""
          />
        </div>
      </section>
      <section className={s.homepageContainer__content}>
        <div className={s.homepageContainer__content__title}>
          <h1 className={s.homepageContainer__content__title__h1}>
            Blog dla Twórców Stron
          </h1>
        </div>
        <div className={s.homepageContainer__content__description}>
          <p className={s.homepageContainer__content__description__p}>
            Znajdziesz tu konkrety o pracy w branży it, Najnowocześniejsze
            rozwiązania w branży, oraz praktyczne porady i wiele więcej
          </p>
        </div>
        <div className={s.homepageContainer__content__buttonWrapper}>
          <button
            className={`${s.homepageContainer__content__buttonWrapper__button} ${s.homepageContainer__content__buttonWrapper__button_read}`}
          >
            Czytaj
          </button>
          <button
            className={`${s.homepageContainer__content__buttonWrapper__button} ${s.homepageContainer__content__buttonWrapper__button_find}`}
          >
            Znajdź pracę
          </button>
        </div>
      </section>
    </section>
  );
};

export default HomepageComponent;
