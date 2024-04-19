import s from "./Post-Content.component.module.scss";

function PostContent() {
  return (
    <section className={s.container}>
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>Co to jest React ?</h2>
      </div>
      <div className={s.container__header__content}>
        React to popularna biblioteka języka JavaScript, stworzona przez
        inżynierów z Facebooka, która jest używana do budowania interfejsów
        użytkownika, szczególnie w jednostronicowych aplikacjach (ang.
        single-page applications). Umożliwia tworzenie dużych aplikacji
        internetowych, które mogą zmieniać dane wyświetlane na ekranie bez
        konieczności przeładowywania strony. Główną zaletą Reacta jest skupienie
        na składnikach (ang. components), co pozwala na łatwe zarządzanie stanem
        i reużywanie kodu.
      </div>
    </section>
  );
}

export default PostContent;
