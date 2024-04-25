import s from "./LastPosts.component.module.scss";

import MainPost from "./Main-Post-Component/Main-Post.component";
import OtherPost from "./Other-Post_component/Other-Post.component";
import { fetchElements } from "@/utils/https";
import { StaticImageData } from "next/image";

async function LastPosts() {
  const fetchItems = await fetchElements("Blog");

  type DataValue = {
    allPosts: Array<{
      author: string;
      category: string;
      date: string;
      description: string;
      id: number;
      image: StaticImageData;
      title: string;
    }>;
    lastPost: Array<{
      author: string;
      category: string;
      date: string;
      description: string;
      id: number;
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

  const lastPost = lastPostItem.lastPost;

  const posts = lastPostItem.allPosts;

  return (
    <section className={s.lastPostsContainer}>
      <div className={s.lastPostsContainer__header}>
        <h2 className={s.lastPostsContainer__header__title}>Najnowsze</h2>
      </div>
      <section className={s.postsWrapper}>
        <section className={s.lastPostsContainer__contentWrapper}>
          {lastPost.map((p) => (
            <MainPost
              key={p.id}
              img={p.image}
              title={p.title}
              description={p.description}
              data={p.date}
              author={p.author}
            />
          ))}
        </section>
        <section className={s.lastPostsContainer__otherLastPostContainer}>
          {posts.map((p) => (
            <OtherPost
              key={p.id}
              img={p.image}
              title={p.title}
              description={p.description}
              data={p.date}
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
