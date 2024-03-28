import Image from "next/image";
import s from "./LatestVideo.component.module.scss";

import img from "@/assets/react.webp";

function LatestVideo() {
  return (
    <section className={s.latestVideoContainer}>
      <section className={s.latestVideoContainer__header}>
        <h2 className={s.latestVideoContainer__header__title}>
          My Latest Videos from YouTube 🎬 🎥 🔴 ▶
        </h2>
        <p className={s.latestVideoContainer__header__content}>
          See my latest videos from YouTube where I explain how to learn
          programming
        </p>
      </section>
      <section className={s.latestVideoContainer__content}>
        <a href="">
          <div className={s.latestVideoContainer__content__imageWrapper}>
            <Image
              className={s.latestVideoContainer__content__imageWrapper__img}
              src={img}
              alt=""
              width={200}
              height={150}
            />
          </div>
        </a>
        <a href="">
          <div className={s.latestVideoContainer__content__imageWrapper}>
            <Image
              className={s.latestVideoContainer__content__imageWrapper__img}
              src={img}
              alt=""
              width={200}
              height={150}
            />
          </div>
        </a>
        <a href="">
          <div className={s.latestVideoContainer__content__imageWrapper}>
            <Image
              className={s.latestVideoContainer__content__imageWrapper__img}
              src={img}
              alt=""
              width={200}
              height={150}
            />
          </div>
        </a>
      </section>
    </section>
  );
}

export default LatestVideo;
