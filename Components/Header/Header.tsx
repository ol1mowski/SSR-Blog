import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";
import img from "@/assets/logo.png";
import HamburgerLogo from "./HamburgerLogo/HamburgerLogo.component";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import SearchSetion from "./SearchSection/SearchSetion";

const Header = () => {
  const { isClick } = useContext(HamburgerClickContext);

  return (
    <>
      <header className={s.header}>
        <section className={s.header__logoSection}>
          <h2 className={s.header__logoSection__logo}>
            IT<span className={s.header__logoSection__logo__span}>:</span>BLOG
          </h2>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <a href="https://oliwiermarkiewicz.netlify.app/" target="_blank">
                <li className={s.header__navMenu__items__item}>O Autorze</li>
              </a>{" "}
              <a href="https://it.pracuj.pl/praca" target="_blank">
                <li className={s.header__navMenu__items__item}>Praca w IT</li>
              </a>{" "}
            </ul>
          </div>
          <SearchSetion />
        </section>
        <HamburgerLogo />

        {/* Hamburger Menu */}

        {isClick ? <HamburgerMenu /> : null}
      </header>
    </>
  );
};

export default Header;
