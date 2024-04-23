import CategorySubpage from "@/Components/CategorySubpage/CategorySubpage.component";
import s from "./page.module.scss";

function page() {
  return (
    <section className={s.container}>
      <CategorySubpage categoryName={"React"} amountOfArticles={'3 artykuły'}/>
    </section>
  );
}

export default page;
