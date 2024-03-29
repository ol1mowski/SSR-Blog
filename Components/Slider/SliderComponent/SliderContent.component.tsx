import s from "./Slider.module.scss";

import img from "@/assets/react.webp";
import Image from "next/image";

const SliderComponent = () => {

  return (
    <>
      <main id="home" className={s.sliderContainer}>
        <div className={s.sliderContainer__image}>
          <Image
            src={img}
            draggable="false"
            alt="post image"
            className={s.sliderContainer__image__img}
          />
        </div>
        <div className={s.sliderContainer__content}>
          <span className={s.sliderContainer__content__latest}>Latest</span>
          <h2 className={s.sliderContainer__content__title}>
            How to start learn react in 2024 ?
          </h2>
          <h3 className={s.sliderContainer__content__text}>
            Unlock the power of React in 2024! 🚀 Whether you're a beginner or
            leveling up, this guide will walk you through the essentials. From
            mastering JSX to building dynamic UIs, embark on your React journey
            today! 💡💻 #LearnReact #WebDevelopment #CodingGuide
          </h3>
        </div>
      </main>
    </>
  );
};

export default SliderComponent;
