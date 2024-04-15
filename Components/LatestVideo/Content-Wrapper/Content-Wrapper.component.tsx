"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import s from './Content-Wrapper.component.module.scss';
import { type ReactNode } from "react";

type ContentWrapperProps = {
    children: ReactNode;
}

function ContentWrapper({ children }: ContentWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={s.content}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.section>
  );
}

export default ContentWrapper;
