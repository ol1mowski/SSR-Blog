import s from './Newsletter.component.module.scss';

function Newsletter() {
  return (
    <section className={s.footerContainer__newsletterWrapper}>
      <div className={s.footerContainer__newsletterWrapper__container}>
        <div
          className={s.footerContainer__newsletterWrapper__container__content}
        >
          <h2
            className={
              s.footerContainer__newsletterWrapper__container__content__title
            }
          >
            Newsletter
          </h2>
          <p
            className={
              s.footerContainer__newsletterWrapper__container__content__description
            }
          >
            Zapisz się do naszego newsletter
          </p>
        </div>
        <div className={s.footerContainer__newsletterWrapper__container__form}>
          <input
            className={
              s.footerContainer__newsletterWrapper__container__form__input
            }
            placeholder="Podaj swój email"
            type="text"
            name="email"
          />
          <button
            className={
              s.footerContainer__newsletterWrapper__container__form__btn
            }
          >
            Dołącz
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
