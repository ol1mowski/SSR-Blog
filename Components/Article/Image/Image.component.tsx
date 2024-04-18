import Image, { type StaticImageData } from "next/image";
import s from "./Image.component.module.scss";


type ImageProps = {
  image: StaticImageData;
};

function ImageComponent({ image }: ImageProps) {
  return (
    <section className={s.container}>
      <div>
        <Image src={image} width={100} height={100} alt="main post image" />
      </div>
    </section>
  );
}

export default ImageComponent;
