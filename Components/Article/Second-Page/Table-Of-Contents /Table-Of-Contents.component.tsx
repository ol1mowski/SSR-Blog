import s from "./Table-Of-Contents.component.module.scss";

function TableOfContents() {
  return (
    <section className={s.container}>
      <div className={s.container__tableOfContentsWrapper}>
        <h3 className={s.container__tableOfContentsWrapper__title}>
          Spis Treści
        </h3>
        <ul className={s.container__tableOfContentsWrapper__listWrapper}>
          <li
            className={s.container__tableOfContentsWrapper__listWrapper__list}
          >
            <span>Co to jest React ?</span>
          </li>{" "}
          <li
            className={s.container__tableOfContentsWrapper__listWrapper__list}
          >
            <span>Jak używać Hooks?</span>
          </li>{" "}
          <li
            className={s.container__tableOfContentsWrapper__listWrapper__list}
          >
            <span>Zarządzanie stanem</span>
          </li>{" "}
          <li
            className={s.container__tableOfContentsWrapper__listWrapper__list}
          >
            <span>Advanced Patterns</span>
          </li>{" "}
        </ul>
      </div>
    </section>
  );
}

export default TableOfContents;
