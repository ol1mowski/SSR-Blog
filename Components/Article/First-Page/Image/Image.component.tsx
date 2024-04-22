import Image, { type StaticImageData } from "next/image";
import s from "./Image.component.module.scss";

type ImageProps = {
  image: StaticImageData;
};

function ImageComponent({ image }: ImageProps) {
  return (
    <section className={s.container}>
      <div className={s.container__imageWrapper}>
        <Image
          className={s.container__imageWrapper__img}
          src={image}
          width={310}
          height={270}
          alt="main post image"
        />
      </div>
    </section>
  );
}

export default ImageComponent;
