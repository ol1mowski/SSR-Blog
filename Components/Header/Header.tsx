import s from "./Header.module.scss";
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
              <li className={s.header__navMenu__items__item}>Home</li>
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
