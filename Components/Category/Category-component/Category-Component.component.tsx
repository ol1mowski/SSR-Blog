import Image, { StaticImageData } from "next/image";

import s from "./Category-Component.component.module.scss";

type CategoryComponentProps = {
  header: string;
  description: string;
  img: StaticImageData;
};

function CategoryComponent({
  header,
  description,
  img,
}: CategoryComponentProps) {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <Image
          className={s.wrapper__header__img}
          src={img}
          width={250}
          height={200}
          alt="category image"
        />
        <h3 className={s.wrapper__header__title}>{ header }</h3>
      </div>
      <div className={s.wrapper__description}>
        <p className={s.wrapper__description__p}>
          { description }
        </p>
      </div>
      <div className={s.wrapper__buttonWrapper}>
        <button className={s.wrapper__buttonWrapper__btn}>Zobacz</button>
      </div>
    </div>
  );
}

export default CategoryComponent;
