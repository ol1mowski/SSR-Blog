import Image from "next/image";
import s from "./PostList.component.module.scss";

import img from "@/assets/react.webp";

import clock from "@/assets/clock.png";

function PostsList() {
  return (
    <section className={s.PostListContainer}>
      <section className={s.PostListContainer__header}>
        <h2 className={s.PostListContainer__header__title}>Last posts 📰</h2>
        <p className={s.PostListContainer__header__content}>
          Read the latest post on my blog
        </p>
      </section>
      <section className={s.PostListContainer__content}>
        <div className={s.PostListContainer__content__postWrapper}>
          <div
            className={s.PostListContainer__content__postWrapper__imageWrapper}
          >
            <Image
              className={
                s.PostListContainer__content__postWrapper__imageWrapper__img
              }
              src={img}
              alt=""
              width={200}
              height={150}
            />
          </div>
          <div className={s.PostListContainer__content__postWrapper__post}>
            <div
              className={
                s.PostListContainer__content__postWrapper__post__content
              }
            >
              <span
                className={
                  s.PostListContainer__content__postWrapper__post__content__category
                }
              >
                React
              </span>
              <h3
                className={
                  s.PostListContainer__content__postWrapper__post__content__title
                }
              >
                How to start learn react in 2024 ?
              </h3>
              <p
                className={
                  s.PostListContainer__content__postWrapper__post__content__description
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequatur eligendi maiores eum, dolore harum{" "}
              </p>
            </div>
            <section
              className={
                s.PostListContainer__content__postWrapper__post__subContent
              }
            >
              <div
                className={
                  s.PostListContainer__content__postWrapper__post__subContent__authorWrapper
                }
              >
                <span
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__authorWrapper__data
                  }
                >
                  28-03-2024
                </span>
              </div>
              <div
                className={
                  s.PostListContainer__content__postWrapper__post__subContent__readContainer
                }
              >
                <Image
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__readContainer__img
                  }
                  src={clock}
                  width={20}
                  height={20}
                  alt=""
                />
                <span
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__readContainer__readTime
                  }
                >
                  5 min
                </span>
              </div>
            </section>
          </div>
        </div>{" "}
        <div className={s.PostListContainer__content__postWrapper}>
          <div
            className={s.PostListContainer__content__postWrapper__imageWrapper}
          >
            <Image
              className={
                s.PostListContainer__content__postWrapper__imageWrapper__img
              }
              src={img}
              alt=""
              width={200}
              height={150}
            />
          </div>
          <div className={s.PostListContainer__content__postWrapper__post}>
            <div
              className={
                s.PostListContainer__content__postWrapper__post__content
              }
            >
              <span
                className={
                  s.PostListContainer__content__postWrapper__post__content__category
                }
              >
                React
              </span>
              <h3
                className={
                  s.PostListContainer__content__postWrapper__post__content__title
                }
              >
                How to start learn react in 2024 ?
              </h3>
              <p
                className={
                  s.PostListContainer__content__postWrapper__post__content__description
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequatur eligendi maiores eum, dolore harum{" "}
              </p>
            </div>
            <section
              className={
                s.PostListContainer__content__postWrapper__post__subContent
              }
            >
              <div
                className={
                  s.PostListContainer__content__postWrapper__post__subContent__authorWrapper
                }
              >
                <span
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__authorWrapper__data
                  }
                >
                  28-03-2024
                </span>
              </div>
              <div
                className={
                  s.PostListContainer__content__postWrapper__post__subContent__readContainer
                }
              >
                <Image
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__readContainer__img
                  }
                  src={clock}
                  width={20}
                  height={20}
                  alt=""
                />
                <span
                  className={
                    s.PostListContainer__content__postWrapper__post__subContent__readContainer__readTime
                  }
                >
                  5 min
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className={s.PostListContainer__button}>
        <button className={s.PostListContainer__button__btn}>More</button>
      </section>
    </section>
  );
}

export default PostsList;
