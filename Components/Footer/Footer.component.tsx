import style from "./Footer.component.module.scss";

import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import yt from "@/assets/yt.png";
import Image from "next/image";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <footer className={style.footerContainer}>
        <section className={style.footerContainer__newsletterWrapper}>
          <div className={style.footerContainer__newsletterWrapper__container}>
            <div
              className={
                style.footerContainer__newsletterWrapper__container__content
              }
            >
              <h2
                className={
                  style.footerContainer__newsletterWrapper__container__content__title
                }
              >
                Newsletter
              </h2>
              <p
                className={
                  style.footerContainer__newsletterWrapper__container__content__description
                }
              >
                Zapisz się do naszego newsletter
              </p>
            </div>
            <div
              className={
                style.footerContainer__newsletterWrapper__container__form
              }
            >
              <input
                className={
                  style.footerContainer__newsletterWrapper__container__form__input
                }
                placeholder="Podaj swój email"
                type="text"
                name="email"
              />
              <button
                className={
                  style.footerContainer__newsletterWrapper__container__form__btn
                }
              >
                Dołącz
              </button>
            </div>
          </div>
        </section>
        <section className={style.footerContainer__footerContent}>
          <section
            className={style.footerContainer__footerContent__copyrightWrapper}
          >
            <span
              className={
                style.footerContainer__footerContent__copyrightWrapper__author
              }
            >
              Made By Oliwier Markiewicz
            </span>
          </section>
          <section
            className={style.footerContainer__footerContent__socialWrapper}
          >
            <div
              className={
                style.footerContainer__footerContent__socialWrapper__privacy
              }
            >
              <span
                className={
                  style.footerContainer__footerContent__socialWrapper__privacy__content
                }
              >
                Polityka prywatności
              </span>
            </div>
            <div
              className={
                style.footerContainer__footerContent__socialWrapper__social
              }
            >
              <Image
                className={
                  style.footerContainer__footerContent__socialWrapper__social__icon
                }
                src={github}
                alt=""
                width={50}
                height={50}
              />
              <Image
                className={
                  style.footerContainer__footerContent__socialWrapper__social__icon
                }
                src={linkedin}
                alt=""
                width={50}
                height={50}
              />
              <Image
                className={
                  style.footerContainer__footerContent__socialWrapper__social__icon
                }
                src={yt}
                alt=""
                width={50}
                height={50}
              />
            </div>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
