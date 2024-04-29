import Image from "next/image";
import s from "./AuthorInfo.component.module.scss";

import author from '@/assets/images/author.webp';

import yt from '@/assets/icons/yt.png';
import linked from '@/assets/icons/linkedin.png';
import github from '@/assets/icons/github.png';

function AuthorInfo() {
  return (
    <section className={s.container}>
      <div className={s.container__authorImageWrapper}>
        <Image className={s.container__authorImageWrapper__img} width={185} height={170} src={author} alt="Author-image" />
      </div>
      <div className={s.container__authorInfoWrapper}>
        <h3 className={s.container__authorInfoWrapper__name}>Oliwier Markiewicz</h3>
        <p className={s.container__authorInfoWrapper__description}>
          Z pasją dzielę się swoją wiedzą z zakresu programoania i stron
          internetowych
        </p>
      </div>
      <div className={s.container__iconsWrapper}>
        <Image className={s.container__iconsWrapper__icon} src={github} alt="social-media-icon" />
        <Image className={s.container__iconsWrapper__icon} src={linked} alt="social-media-icon" />
        <Image className={s.container__iconsWrapper__icon} src={yt} alt="social-media-icon" />
      </div>
    </section>
  );
}

export default AuthorInfo;
