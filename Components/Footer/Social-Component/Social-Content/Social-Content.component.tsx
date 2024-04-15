import { ICONS_LIST } from "@/data/Footer.data";
import SocialIcons from "../Social-Icons/SocialIcons.component";

import s from "./Social-Content.component.module.scss";

function SocialContent() {
  return (
    <section className={s.socialWrapper}>
      <div className={s.socialWrapper__privacy}>
        <span className={s.socialWrapper__privacy__content}>
          Polityka prywatności
        </span>
      </div>
      <div className={s.social}>
        {ICONS_LIST.map((i) => (
          <SocialIcons key={i.id} img={i.img} />
        ))}
      </div>
    </section>
  );
}

export default SocialContent;
