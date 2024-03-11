import img from "@/assets/logo-no-background.svg";

import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";

// import { useRef } from "react";

// import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
// import SearchSetion from "./SearchSection/SearchSetion";

const Header = () => {
  // const navigationSection = useRef(null);

  // const showHamburgerMenu = useRef(null);

  return (
    <>
      <header className={s.header}>
        <section className={s.header__logoSection}>
          <Link href={"/"}>
            <Image
              className={s.header__logoSection__img}
              src={img}
              alt="programming-flag"
              width={190}
              height={45}
            />{" "}
          </Link>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>About Author</li>
              </Link>{" "}
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Books for programmer</li>
              </Link>{" "}
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Recomended courses</li>
              </Link>
            </ul>
          </div>
        </section>
        <section className={s.header__hamburgerSection}>
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/menu-squared-2.png"
            alt="menu-squared-2"
          />
        </section>

        {/* Hamburger Menu */}
        {/* 
        <HamburgerMenu showHamburgerMenu={showHamburgerMenu} />

        <SearchSetion /> */}
      </header>
    </>
  );
};

export default Header;
