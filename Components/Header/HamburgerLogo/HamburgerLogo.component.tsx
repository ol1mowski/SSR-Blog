"use client";

import s from "./HamburgerLogo.module.scss";

import Image from "next/image";
import { useContext, useRef } from "react";

import hamburger from "@/assets/hamburger.png";
import HamburgerClickContext from "@/store/HamburgerClickContext";

function HamburgerLogo() {
  const hamburgerSwitch = useRef<HTMLDivElement>(null);

  const { setClick, isClick } = useContext(HamburgerClickContext);

  const hamburgerClickHandler = () => {
    setClick(!isClick);
  };

  return (
    <section
      onClick={hamburgerClickHandler}
      ref={hamburgerSwitch}
      className={s.hamburgerSection}
    >
      <Image width={30} height={30} src={hamburger} alt="menu--v6" />
    </section>
  );
}

export default HamburgerLogo;
