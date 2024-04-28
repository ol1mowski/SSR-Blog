import Image, { StaticImageData } from "next/image";
import s from "./Main-Post.component.module.scss";
import Link from "next/link";

type MainPostProps = {
  title: string;
  description: string;
  author: string;
  data: string;
  img: StaticImageData;
};

function MainPost({ title, description, author, data, img }: MainPostProps) {
  return (
    <section className={s.lastPostWrapper}>
      <Link href={"/post/react"}>
        <div className={s.post}>
          <div className={s.post__imageWrapper}>
            <Image
              className={s.post__imageWrapper__img}
              width={250}
              height={150}
              src={img}
              alt="post-image"
            />
          </div>
          <div className={s.post__content}>
            <h3 className={s.post__content__title}>{title}</h3>
            <p className={s.post__content__description}>{description}</p>
            <div className={s.post__content__sub}>
              <span className={s.post__content__sub__author}>{author}</span>
              <span className={s.post__content__sub__author}>{data}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MainPost;
