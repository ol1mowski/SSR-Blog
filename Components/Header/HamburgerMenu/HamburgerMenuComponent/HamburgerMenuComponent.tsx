import s from "./HamburgerMenuComponent.module.scss";

import close from "@/assets/close_icon.png";
import java from "@/assets/java_icon.png";
import react from "@/assets/react_icon.png";
import Image from "next/image";

type HamburgerMenuComponentProps = {
  hideMenuHandler: () => void;
};

const HamburgerMenuComponent = ({
  hideMenuHandler,
}: HamburgerMenuComponentProps) => {
  return (
    <menu className={s.hamburgerMenu}>
      <section onClick={hideMenuHandler} className={s.hamburgerMenu__close}>
        <Image width="30" height="30" src={close} alt="delete-sign" />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <Image
          className={s.hamburgerMenu__nav__imgJava}
          width="100"
          height="100"
          src={java}
          alt="java-coffee-cup-logo"
        />
        <ul className={s.hamburgerMenu__nav__items}>
          <li
            onClick={hideMenuHandler}
            className={s.hamburgerMenu__nav__items__item}
          >
            Home
          </li>{" "}
          <li
            onClick={hideMenuHandler}
            className={s.hamburgerMenu__nav__items__item}
          >
            About Author
          </li>{" "}
          <li
            onClick={hideMenuHandler}
            className={s.hamburgerMenu__nav__items__item}
          >
            Posts
          </li>{" "}
        </ul>
        <Image
          className={s.hamburgerMenu__nav__imgReact}
          width="200"
          height="200"
          src={react}
          alt="react"
        />
      </nav>
    </menu>
  );
};

export default HamburgerMenuComponent;
