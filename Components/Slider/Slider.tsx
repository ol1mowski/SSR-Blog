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
        <p className={s.sliderContainer__content__category}>React</p>
        <h2 className={s.sliderContainer__content__title}>
          React5 for beginners
        </h2>
        <h3 className={s.sliderContainer__content__text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          pariatur corrupti, qui doloremque ipsum tenetur quas optio sed nam
          laudantium expedita delectus et corporis recusandae inventore odit
          velit veniam vitae?
        </h3>
        <Link href={`/`}>
          <p className={s.sliderContainer__content__read}>Read more</p>
        </Link>
      </section>
    </main>
  );
};

export default SliderComponent;
