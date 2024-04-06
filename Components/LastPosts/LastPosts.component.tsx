import Image from "next/image";
import s from "./LastPosts.component.module.scss";

import img from "@/assets/react.webp";

function LastPosts() {
  return (
    <section className={s.lastPostsContainer}>
      <section className={s.lastPostsContainer__lastPostWrapper}>
        <div className={s.lastPostsContainer__lastPostContainer__header}>
          <h2 className={s.lastPostsContainer__lastPostContainer__header__title}>Najnowsze</h2>
        </div>
        <div className={s.lastPostsContainer__lastPostContainer__post}>
          <div className={s.lastPostsContainer__lastPostContainer__post__imageWrapper}>
            <Image className={s.lastPostsContainer__lastPostContainer__post__imageWrapper__img} width={250} height={150} src={img} alt="" />
          </div>
          <div className={s.lastPostsContainer__lastPostContainer__post__content}>
            <h3 className={s.lastPostsContainer__lastPostContainer__post__content__title}>Jak zacząć się uczyć React w 2024 roku ?</h3>
            <p className={s.lastPostsContainer__lastPostContainer__post__content__description}>
              Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o
              tematyce tworzenia stron internetowych. Koniecznie musisz je znać
            </p>
            <span className={s.lastPostsContainer__lastPostContainer__post__author}>Oliwier Markiewicz</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LastPosts;
