import Header from "@/Components/Article/First-Page/Header/Header.component";

import s from "./page.module.scss";
import Bar from "@/Components/Article/First-Page/Bar/Bar.component";
import img from "@/assets/react.webp";

import ImageComponent from "@/Components/Article/First-Page/Image/Image.component";
import AuthorInfo from "@/Components/Article/First-Page/AuthorInfo/AuthorInfo.component";
import PostContent from "@/Components/Article/Second-Page/Post-Content/Post-Content.component";

function page({ params }: { params: { postId: string } }) {
  return (
    <main className={s.container}>
      <section className={s.container__firstSection}>
        <section className={s.container__firstSection__postWrapper}>
          <Header title="Jak zacząć się uczyć React w 2024 roku ? " />
          <Bar readTime={5} />
          <ImageComponent image={img} />
        </section>
        <section className={s.container__firstSection__authorInfo}>
          <AuthorInfo />
        </section>
      </section>

      <section className={s.container__blogSection}>
        <PostContent />
      </section>
    </main>
  );
}

export default page;
