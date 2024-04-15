import Image, { StaticImageData } from "next/image";

import s from "./SocialIcons.component.module.scss";

type SocialIconsProps = {
    img: StaticImageData,
}

function SocialIcons({ img }: SocialIconsProps) {
  return (
    <div className={s.footerContainer__footerContent__socialWrapper__social}>
      <Image
        className={
          s.footerContainer__footerContent__socialWrapper__social__icon
        }
        src={img}
        alt="social-icon"
        width={50}
        height={50}
      />
    </div>
  );
}

export default SocialIcons;
