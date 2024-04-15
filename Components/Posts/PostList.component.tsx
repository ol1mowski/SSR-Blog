import s from "./PostList.component.module.scss";

import PostWrapper from "./Post-Component/PostWrapper.component";
import { OTHER_POST } from "@/data/Posts.data";

function PostsList() {
  return (
    <section className={s.PostListContainer}>
      <section className={s.PostListContainer__header}>
        <h2 className={s.PostListContainer__header__title}>
          Ostatnie posty 📰
        </h2>
      </section>
      <section className={s.PostListContainer__content}>
        {OTHER_POST.map((p) => (
          <PostWrapper
            key={p.id}
            icon={p.img}
            title={p.title}
            description={p.description}
            category={p.category}
            time={p.time}
            data={p.data}
            clock={p.clock}
          />
        ))}
      </section>
      <section className={s.PostListContainer__button}>
        <button className={s.PostListContainer__button__btn}>Więcej</button>
      </section>
    </section>
  );
}

export default PostsList;
