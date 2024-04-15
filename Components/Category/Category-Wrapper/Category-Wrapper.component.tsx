"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import s from "./Category-Wrapper.component.module.scss";
import { type ReactNode } from "react";

type CategoryWrapperProps = {
  children: ReactNode;
};

function CategoryWrapper({ children }: CategoryWrapperProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.5 } },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={s.wrapper}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      {children}
    </motion.section>
  );
}

export default CategoryWrapper;
