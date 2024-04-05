"use client";

import Image from "next/image";
import s from "./LatestVideo.component.module.scss";

import img from "@/assets/lastVideo.png";

const LatestVideo = () => {
  return (
    <section className={s.lastVideoContainer}>
      <section className={s.lastVideoContainer__content}>
        <div className={s.lastVideoContainer__content__title}>
          <h1 className={s.lastVideoContainer__content__title__h1}>
            Zabacz mój ostatni odcinek
          </h1>
        </div>
        <div className={s.lastVideoContainer__content__description}>
          <p className={s.lastVideoContainer__content__description__p}>
            Znajdziesz tu konkrety o pracy w branży it, Najnowocześniejsze
            rozwiązania w branży, oraz praktyczne porady i wiele więcej
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
      </section>
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
