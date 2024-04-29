"use client";

import { motion  } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PostImage from "./PostImage/PostImage.component";
import Post from "./Post/Post.component";
import { StaticImageData } from "next/image";

import s from "./PostWrapper.component.module.scss";

type PostWrapperProps = {
  icon: StaticImageData;
  category: string;
  title: string;
  description: string;
  data: string;
  time: number;
};

function PostWrapper({
  icon,
  category,
  title,
  description,
  data,
  time,
}: PostWrapperProps) {
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
    <motion.div
      className={s.postWrapper}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <PostImage icon={icon} />
      <Post
        category={category}
        title={title}
        description={description}
        data={data}
        time={time}
      />
    </motion.div>
  );
}

export default PostWrapper;
