import { OTHER_POST } from "@/data/Posts.data";
import s from "./CategorySubpage.component.module.scss";
import PostWrapper from "../Posts/Post-Component/PostWrapper.component";

type CategorySubpageProps = {
  categoryName: string;
  amountOfArticles: string;
};

function CategorySubpage({ categoryName, amountOfArticles }: CategorySubpageProps) {
  return (
    <section className={s.header}>
      <div className={s.header__categoryNameWrapper}>
        {" "}
        <h2 className={s.header__categoryNameWrapper__title}>{categoryName}</h2>
        <span className={s.header__categoryNameWrapper__amountOfArticles}>{ amountOfArticles }</span>
      </div>
      <div>
        <div className={s.header__postsWrapper}>
          {OTHER_POST.map((p) => (
            <PostWrapper
              key={p.id}
              icon={p.img}
              title={p.title}
              description={p.description}
              category={p.category}
              time={p.time}
              data={p.data}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySubpage;
