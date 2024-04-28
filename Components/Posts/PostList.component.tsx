import s from "./PostList.component.module.scss";

import PostWrapper from "./Post-Component/PostWrapper.component";
import { fetchElements } from "@/utils/https";
import { StaticImageData } from "next/image";

type DataType = {
  id: string;
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

async function PostsList() {
  const fetchItems = await fetchElements("Blog");
  const allPostsItem = fetchItems.find(
    (item) => item.id === "posts"
  ) as DataType;

  if (!allPostsItem) {
    throw new Error("No matching item found.");
  }

  const { allPosts } = allPostsItem;

  if (!allPosts) {
    throw new Error("Some required properties are missing.");
  }


  return (
    <section className={s.PostListContainer}>
      <section className={s.PostListContainer__header}>
        <h2 className={s.PostListContainer__header__title}>
          Ostatnie posty 📰
        </h2>
      </section>
      <section className={s.PostListContainer__content}>
        {allPosts.map((p) => (
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
