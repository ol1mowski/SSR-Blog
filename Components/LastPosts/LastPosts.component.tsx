import s from "./LastPosts.component.module.scss";

import MainPost from "./Main-Post-Component/Main-Post.component";
import { MAIN_POST, OTHER_POST } from "@/data/Posts.data";
import OtherPost from "./Other-Post_component/Other-Post.component";

function LastPosts() {
  return (
    <section className={s.lastPostsContainer}>
      <div className={s.lastPostsContainer__header}>
        <h2 className={s.lastPostsContainer__header__title}>Najnowsze</h2>
      </div>
      <section className={s.postsWrapper}>
        <section className={s.lastPostsContainer__contentWrapper}>
          {MAIN_POST.map((p) => (
            <MainPost
              key={p.id}
              img={p.img}
              title={p.title}
              description={p.description}
              data={p.data}
              author={p.author}
            />
          ))}
        </section>
        <section className={s.lastPostsContainer__otherLastPostContainer}>
          {OTHER_POST.map((p) => (
            <OtherPost
              key={p.id}
              img={p.img}
              title={p.title}
              description={p.description}
              data={p.data}
              author={p.author}
              category={p.category}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default LastPosts;
