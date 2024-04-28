import Image, { StaticImageData } from "next/image";
import s from "./LatestVideo.component.module.scss";
import ContentWrapper from "./Content-Wrapper/Content-Wrapper.component";
import { fetchElements } from "@/utils/https";

import image from '@/assets/images/lastVideo.png';

type DataType = {
  id: string;
  link: string;
};


const LatestVideo = async () => {
  const fetchItems = await fetchElements("Blog");

  const lastVideoItem = fetchItems.find(
    (item) => item.id === "LastVideo"
  ) as DataType;


  if (!lastVideoItem) {
    throw new Error("No matching item found.");
  }

  const { link } = lastVideoItem;  
  
  
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
          <a href={link} target="_blank" rel="noopener noreferrer">
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
            src={image}
            alt="My last video miniature image"
          />
        </div>
      </section>
    </section>
  );
};

export default LatestVideo;
