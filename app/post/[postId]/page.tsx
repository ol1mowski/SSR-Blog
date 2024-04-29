"use client";

import Header from "@/Components/Article/First-Page/Header/Header.component";

import s from "./page.module.scss";
import Bar from "@/Components/Article/First-Page/Bar/Bar.component";
import img from "@/assets/images/react.webp";

import ImageComponent from "@/Components/Article/First-Page/Image/Image.component";
import AuthorInfo from "@/Components/Article/First-Page/AuthorInfo/AuthorInfo.component";
import PostContent from "@/Components/Article/Second-Page/Post-Content/Post-Content.component";
import TableOfContents from "@/Components/Article/Second-Page/Table-Of-Contents /Table-Of-Contents.component";
import { useEffect, useRef, useState } from "react";
import { POSTS_CONTENT } from "@/data/Posts.data";

function page({ params }: { params: { postId: string } }) {
  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (header.current) {
      if (scrollY > 800) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={s.container}>
      <section className={s.container__firstSection}>
        <section className={s.container__firstSection__postWrapper}>
          <Header title="Jak zacząć się uczyć React w 2024 roku ? " />
          <Bar readTime={5} />
          <ImageComponent image={img} />
        </section>
        <section className={s.container__firstSection__authorInfo}>
          <AuthorInfo />
        </section>
      </section>

      <section className={s.container__blogSection}>
        <section className={s.container__blogSection__content}>
          {POSTS_CONTENT.map((p) => (
            <PostContent
              key={p.id}
              title={p.title}
              description={p.description}
            />
          ))}
        </section>
        <section
          ref={header}
          className={` ${
            isSticky
              ? s.container__blogSection__tableOfContents_sticky
              : s.container__blogSection__tableOfContents
          }`}
        >
          <TableOfContents />
        </section>
      </section>
    </main>
  );
}

export default page;
