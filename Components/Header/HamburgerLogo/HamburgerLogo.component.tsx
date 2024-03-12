"use client";

import s from "./HamburgerLogo.module.scss";

import Image from "next/image";
import { useRef } from "react";

import hamburger from "@/assets/hamburger.png";

function HamburgerLogo() {
  const hamburgerSwitch = useRef<HTMLDivElement>(null);

  const hamburgerClickHandler = () => {
    // console.log("clicked");
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
