import Image from "next/image";
import s from "./LatestVideo.component.module.scss";
import img from "@/assets/lastVideo.png";
import ContentWrapper from "./Content-Wrapper/Content-Wrapper.component";

const LatestVideo = () => {

  return (
    <section className={s.lastVideoContainer}>
      <ContentWrapper>
        <div className={s.lastVideoContainer__content__title}>
          <h1 className={s.lastVideoContainer__content__title__h1}>
            Zobacz mój ostatni odcinek
          </h1>
        </div>
        <div className={s.lastVideoContainer__content__description}>
          <p className={s.lastVideoContainer__content__description__p}>
            Znajdziesz tu konkretne informacje o pracy w branży IT,
            najnowocześniejsze rozwiązania w branży, praktyczne porady i wiele
            więcej.
          </p>
        </div>
        <div className={s.lastVideoContainer__content__buttonWrapper}>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={s.lastVideoContainer__content__buttonWrapper__button}
            >
              Zobacz na YouTube
            </button>
          </a>
        </div>
      </ContentWrapper>

      <section className={s.lastVideoContainer__image}>
        <div className={s.lastVideoContainer__image__imageWrapper}>
          <Image
            width={300}
            height={250}
            className={s.lastVideoContainer__image__imageWrapper__img}
            src={img}
            alt="My last video miniature image"
          />
        </div>
      </section>
    </section>
  );
};

export default LatestVideo;
