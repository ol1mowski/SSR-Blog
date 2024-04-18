import Header from "@/Components/Article/Header.component";

import s from './page.module.scss';

function page({ params }: { params: { postId: string } }) {
  return (
    <main className={s.container}>
      <Header title="Jak zacząć się uczyć React w 2024 roku ? " />
    </main>
  );
}

export default page;
