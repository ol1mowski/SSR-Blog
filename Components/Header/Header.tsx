import s from "./Header.module.scss";
import HamburgerLogo from "./HamburgerLogo/HamburgerLogo.component";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import SearchSetion from "./SearchSection/SearchSetion";
import Link from "next/link";
import { fetchElements } from "@/utils/https";

const Header = () => {
  const { isClick } = useContext(HamburgerClickContext);

  return (
    <>
      <header className={s.header}>
        <section className={s.header__logoSection}>
          <h2 className={s.header__logoSection__logo}>
            <Link href={"/"}>
              IT<span className={s.header__logoSection__logo__span}>:</span>BLOG
            </Link>
          </h2>
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>
              <li>
                {" "}
                <a
                  className={s.header__navMenu__items__item}
                  href="https://oliwiermarkiewicz.netlify.app/"
                  target="_blank"
                >
                  O Autorze
                </a>
              </li>

              <li>
                {" "}
                <a
                  className={s.header__navMenu__items__item}
                  href="https://it.pracuj.pl/praca"
                  target="_blank"
                >
                  Praca w IT
                </a>
              </li>
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
