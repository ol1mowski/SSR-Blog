import s from "./Footer.component.module.scss";

import Newsletter from "./Newsletter-Component/Newsletter.component";
import SocialContent from "./Social-Component/Social-Content/Social-Content.component";

const Footer = () => {
  return (
    <>
      <footer className={s.footerContainer}>
        <Newsletter />
        <section className={s.footerContainer__footerContent}>
          <section
            className={s.footerContainer__footerContent__copyrightWrapper}
          >
            <span
              className={
                s.footerContainer__footerContent__copyrightWrapper__author
              }
            >
              Made By Oliwier Markiewicz
            </span>
          </section>
          <SocialContent />
        </section>
      </footer>
    </>
  );
};

export default Footer;
