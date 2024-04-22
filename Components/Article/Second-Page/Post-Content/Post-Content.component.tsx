"use client";
import React, { useContext, useEffect, useRef } from "react";
import s from "./Post-Content.component.module.scss";
import PostVisibleContext from "@/store/PostVisableContext";

type PostContentProps = {
  title: string;
  description: string;
};

function PostContent({ title, description }: PostContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { setSectionVisible, sectionVisible } = useContext(PostVisibleContext);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSectionVisible(title, true);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    } else {
      setSectionVisible(title, false);
    }
  }, []);

  useEffect(() => {
    console.log(sectionVisible);
  }, [sectionVisible]);

  return (
    <section ref={ref} className={s.container}>
      <div className={s.container__header}>
        <h2 className={s.container__header__title}>{title}</h2>
      </div>
      <div className={s.container__header__content}>{description}</div>
    </section>
  );
}

export default PostContent;
