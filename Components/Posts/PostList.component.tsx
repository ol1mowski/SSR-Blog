import s from "./PostList.component.module.scss";

import PostWrapper from "./Post-Component/PostWrapper.component";
import { fetchElements } from "@/utils/https";
import { StaticImageData } from "next/image";

async function PostsList() {

    const fetchItems = await fetchElements("Blog");

  type DataValue = {
    allPosts: Array<{
      author: string;
      category: string;
      date: string;
      description: string;
      id: number;
      time: number;
      image: StaticImageData;
      title: string;
    }>;
  };

  const lastPostItem: DataValue = fetchItems.find(
    (item) => item.id === "posts"
  );

  if (!lastPostItem) {
    throw new Error("Could not find");
  }


  const posts = lastPostItem.allPosts;

  return (
    <section className={s.PostListContainer}>
      <section className={s.PostListContainer__header}>
        <h2 className={s.PostListContainer__header__title}>
          Ostatnie posty 📰
        </h2>
      </section>
      <section className={s.PostListContainer__content}>
        {posts.map((p) => (
          <PostWrapper
            key={p.id}
            icon={p.image}
            title={p.title}
            description={p.description}
            category={p.category}
            time={p.time}
            data={p.date}
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
