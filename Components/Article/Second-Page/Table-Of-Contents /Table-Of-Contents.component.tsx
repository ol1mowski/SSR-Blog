import { useContext } from "react";
import s from "./Table-Of-Contents.component.module.scss";
import PostVisibleContext from "@/store/PostVisableContext";

function TableOfContents() {
  const { sectionVisible } = useContext(PostVisibleContext);

  const { isVisible, sectionName } = sectionVisible;

  return (
    <section className={s.container}>
      <div className={s.container__tableOfContentsWrapper}>
        <h3 className={s.container__tableOfContentsWrapper__title}>
          Spis Treści
        </h3>

        <ul className={s.container__tableOfContentsWrapper__listWrapper}>
          <li
            className={
              sectionName === "Co to jest React ?" && isVisible
                ? `${s.container__tableOfContentsWrapper__listWrapper__list_active}`
                : `${s.container__tableOfContentsWrapper__listWrapper__list}`
            }
          >
            <span>Co to jest React ?</span>
          </li>{" "}
          <li
            className={
              sectionName === "Jak używać Hooks ?" && isVisible
                ? `${s.container__tableOfContentsWrapper__listWrapper__list_active}`
                : `${s.container__tableOfContentsWrapper__listWrapper__list}`
            }
          >
            <span>Jak używać Hooks ?</span>
          </li>{" "}
          <li
            className={
              sectionName === "Zarządzanie stanem" && isVisible
                ? `${s.container__tableOfContentsWrapper__listWrapper__list_active}`
                : `${s.container__tableOfContentsWrapper__listWrapper__list}`
            }
          >
            <span>Zarządzanie stanem</span>
          </li>{" "}
          <li
            className={
              sectionName === "Advanced Patterns" && isVisible
                ? `${s.container__tableOfContentsWrapper__listWrapper__list_active}`
                : `${s.container__tableOfContentsWrapper__listWrapper__list}`
            }
          >
            <span>Advanced Patterns</span>
          </li>{" "}
        </ul>
      </div>
    </section>
  );
}

export default TableOfContents;
