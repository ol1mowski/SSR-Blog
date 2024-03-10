"use client";

import Link from "next/link";
import s from "./Header.module.scss";

// import { useRef } from "react";

// import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
// import SearchSetion from "./SearchSection/SearchSetion";

const Header = () => {
  // const navigationSection = useRef(null);

  // const showHamburgerMenu = useRef(null);

  return (
    <>
      <header className={s.header}>
        <section className={s.header__titleSection}>
          <Link href={"/"}>
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/programming-flag.png"
              alt="programming-flag"
            />
          </Link>
          <h2 className={s.header__h2}>IT-Blog</h2>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <Link
                href={"/"}
                className={s.header__navMenu__items__link_active}
              >
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <Link
                href={"/"}
                className={s.header__navMenu__items__link_active}
              >
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <Link
                href={"/"}
                className={s.header__navMenu__items__link_active}
              >
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <Link
                href={"/"}
                className={s.header__navMenu__items__link_active}
              >
                <li className={s.header__navMenu__items__item}>Home</li>
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
