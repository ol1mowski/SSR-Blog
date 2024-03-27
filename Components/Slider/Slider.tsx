import Link from "next/link";
import s from "./Slider.module.scss";
import Image from "next/image";

import img from "@/assets/react.webp";

const SliderComponent = () => {
  return (
    <main className={s.sliderContainer}>
      <section className={s.sliderContainer__image}>
        <Image
          src={img}
          className={s.sliderContainer__image__img}
          alt="image"
          width={400}
          height={200}
        />
      </section>
      <section className={s.sliderContainer__content}>
        <h2 className={s.sliderContainer__content__title}>
          React for Beginners
        </h2>
        <p className={s.sliderContainer__content__text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          pariatur corrupti, qui doloremque ipsum tenetur quas optio sed nam
          laudantium expedita 
        </p>
        <Link href={`/`}>
          <button className={s.sliderContainer__content__read}>Read more</button>
        </Link>
      </section>
    </main>
  );
};

export default SliderComponent;
