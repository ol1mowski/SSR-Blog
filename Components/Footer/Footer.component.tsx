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
                style.footerContainer__newsletterWrapper__container__newsletter
              }
            >
              <input placeholder="Podaj swój email" type="text" name="" id="" />
              <button>Dołącz</button>
            </div>
          </div>
        </section>
        <section className={style.footerContainer__copyrightWrapper}>
          <span>Made By Oliwier Markiewicz</span>
        </section>
        <section className={style.footerContainer__socialWrapper}>
          <div className={style.footerContainer__socialWrapper__privacy}>
            <span>Polityka prywatności</span>
          </div>
          <div className={style.footerContainer__socialWrapper__social}>
            <Image src={github} alt="" width={50} height={50} />
            <Image src={linkedin} alt="" width={50} height={50} />
            <Image src={yt} alt="" width={50} height={50} />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
