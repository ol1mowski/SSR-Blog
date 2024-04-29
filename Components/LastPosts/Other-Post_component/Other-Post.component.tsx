import Image, { StaticImageData } from "next/image";
import s from "./Other-Post.component.module.scss";
import Link from "next/link";

type OtherPostProps = {
  title: string;
  description: string;
  author: string;
  data: string;
  img: StaticImageData;
  category: string;
};

function OtherPost({
  title,
  description,
  author,
  data,
  img,
  category,
}: OtherPostProps) {
  return (
    <section className={s.otherLastPostWrapper}>
      <Link href={"/post/react"}>
        <div className={s.post}>
          <div className={s.post__imageWrapper}>
            <Image
              className={s.post__imageWrapper__img}
              width={250}
              height={100}
              src={img}
              alt="post-image"
            />
          </div>
          <div className={s.post__content}>
            <div className={s.post__content__category}>{category}</div>
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

export default OtherPost;
