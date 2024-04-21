import s from "./Post-Content.component.module.scss";

type PostContentProps = {
  title: string,
  description: string,
}

function PostContent({ title, description }: PostContentProps) {
  return (
    <section className={s.container}>
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>{ title }</h2>
      </div>
      <div className={s.container__header__content}>
        { description }
      </div>
    </section>
  );
}

export default PostContent;
