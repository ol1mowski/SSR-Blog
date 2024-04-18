import Header from "@/Components/Article/Header/Header.component";

import s from "./page.module.scss";
import Bar from "@/Components/Article/Bar/Bar.component";
import img from "@/assets/react.webp";

import ImageComponent from "@/Components/Article/Image/Image.component";

function page({ params }: { params: { postId: string } }) {
  return (
    <main className={s.container}>
      <Header title="Jak zacząć się uczyć React w 2024 roku ? " />
      <Bar readTime={5} />
      <ImageComponent image={img} />
    </main>
  );
}

export default page;
