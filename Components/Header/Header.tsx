import Link from "next/link";
import s from "./Header.module.scss";
// import Image from "next/image";
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
          {/* <Link href={"/"}>
            <Image
              className={s.header__logoSection__img}
              src={img}
              alt="programming-flag"
              width='250'
              height='50'
              priority
            />
          </Link> */}
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <Link href={"/"}>
                <li className={s.header__navMenu__items__item}>Home</li>
              </Link>{" "}
              <a href="https://oliwiermarkiewicz.netlify.app/" target="_blank">
                <li className={s.header__navMenu__items__item}>About Author</li>
              </a>{" "}
              <a href="#posts">
                <li className={s.header__navMenu__items__item}>Posts</li>
              </a>{" "}
            </ul>
          </div>
        </section>
        <HamburgerLogo />

        {/* Hamburger Menu */}

        {isClick ? <HamburgerMenu /> : null}

        <SearchSetion />
      </header>
    </>
  );
};

export default Header;
