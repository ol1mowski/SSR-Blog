import Header from "@/Components/Article/Header/Header.component";

import s from './page.module.scss';
import Bar from "@/Components/Article/Bar/Bar.component";

function page({ params }: { params: { postId: string } }) {
  return (
    <main className={s.container}>
      <Header title="Jak zacząć się uczyć React w 2024 roku ? " />
      <Bar readTime={5}/>
    </main>
  );
}

export default page;
