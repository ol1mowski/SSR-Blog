import Image, { StaticImageData } from "next/image";
import s from "./PostImage.component.module.scss";

type PostImageProps = {
  icon: StaticImageData;
};

function PostImage({ icon }: PostImageProps) {
  return (
    <div className={s.postWrapper__imageWrapper}>
      <Image
        className={s.postWrapper__imageWrapper__img}
        src={icon}
        alt="post-image"
        width={200}
        height={150}
      />
    </div>
  );
}

export default PostImage;
