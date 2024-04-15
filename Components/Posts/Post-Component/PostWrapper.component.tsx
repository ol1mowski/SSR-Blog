import PostImage from "./PostImage/PostImage.component";
import Post from "./Post/Post.component";
import { StaticImageData } from "next/image";

import s from './PostWrapper.component.module.scss';

type PostWrapperProps = {
  clock: StaticImageData;
  icon: StaticImageData;
  category: string;
  title: string;
  description: string;
  data: string;
  time: number;
};

function PostWrapper({
  icon,
  clock,
  category,
  title,
  description,
  data,
  time,
}: PostWrapperProps) {
  return (
    <div className={s.postWrapper}>
      <PostImage icon={icon} />
      <Post
        clock={clock}
        category={category}
        title={title}
        description={description}
        data={data}
        time={time}
      />
    </div>
  );
}

export default PostWrapper;
