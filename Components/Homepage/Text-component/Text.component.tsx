"use client";

import s from "./Text.component.module.scss";

import { useEffect, useState } from "react";

function Text() {
  const text = "Blog dla Twórców Stron </>";

  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(() => text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);
  return (
    <h1 className={s.h1}>{displayedText}</h1>
  );
}

export default Text;
