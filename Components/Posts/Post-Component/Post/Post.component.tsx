import Image, { StaticImageData } from "next/image";

import s from "./Post.component.module.scss";

type PostProps = {
  clock: StaticImageData;
  category: string;
  title: string;
  description: string;
  data: string;
  time: number;
};
function Post({ clock, category, title, description, data, time,  }: PostProps) {
  return (
    <div className={s.post}>
      <div className={s.post__content}>
        <span className={s.post__content__category}>{ category }</span>
        <h3 className={s.post__content__title}>
          { title }
        </h3>
        <p className={s.post__content__description}>
          { description }
        </p>
      </div>
      <section className={s.post__subContent}>
        <div className={s.post__subContent__authorWrapper}>
          <span className={s.post__subContent__authorWrapper__data}>
            { data }
          </span>
        </div>
        <div className={s.post__subContent__readContainer}>
          <Image
            className={s.post__subContent__readContainer__img}
            src={clock}
            width={20}
            height={20}
            alt="clock-icon"
          />
          <span className={s.post__subContent__readContainer__readTime}>
            { time } min
          </span>
        </div>
      </section>
    </div>
  );
}

export default Post;
