import { ICONS_LIST } from "@/data/Footer.data";
import SocialIcons from "../Social-Icons/SocialIcons.component";

import s from './Social-Content.component.module.scss';

function SocialContent() {
  return (
    <section className={s.footerContainer__footerContent__socialWrapper}>
      <div className={s.footerContainer__footerContent__socialWrapper__privacy}>
        <span
          className={
            s.footerContainer__footerContent__socialWrapper__privacy__content
          }
        >
          Polityka prywatności
        </span>
      </div>
      {ICONS_LIST.map((i) => (
        <SocialIcons key={i.id} img={i.img} />
      ))}
    </section>
  );
}

export default SocialContent;
