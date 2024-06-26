import Image from "next/image";
import s from "./Bar.component.module.scss";

import clock from "@/assets/icons/clock.png";
import Link from "next/link";

type BarProps = {
  readTime: number;
};

function Bar({ readTime }: BarProps) {
  return (
    <section className={s.container}>
      <div className={s.container__categoryWrapper}>
        <Link href={`/category/react`}>
          <div className={s.container__categoryWrapper__category}>React</div>
        </Link>
      </div>
      <div className={s.container__infoWrapper}>
        <div className={s.container__infoWrapper__date}>04.04.2024</div>
        <div className={s.container__infoWrapper__readTime}>
          <Image
            width={20}
            height={20}
            className={s.container__infoWrapper__readTime__img}
            src={clock}
            alt="clock-icon"
          />
          <span className={s.container__infoWrapper__readTime__content}>
            {readTime} min
          </span>
        </div>
      </div>
    </section>
  );
}

export default Bar;
