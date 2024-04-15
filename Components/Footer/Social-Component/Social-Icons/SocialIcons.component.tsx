import Image, { StaticImageData } from "next/image";

import s from "./SocialIcons.component.module.scss";

type SocialIconsProps = {
  img: StaticImageData;
};

function SocialIcons({ img }: SocialIconsProps) {
  return (
    <Image
      className={s.icon}
      src={img}
      alt="social-icon"
      width={50}
      height={50}
    />
  );
}

export default SocialIcons;
