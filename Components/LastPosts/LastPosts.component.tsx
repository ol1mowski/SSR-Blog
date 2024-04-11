import Image from "next/image";
import s from "./LastPosts.component.module.scss";

import img from "@/assets/react.webp";

function LastPosts() {
  return (
    <section className={s.lastPostsContainer}>
      <div className={s.lastPostsContainer__header}>
        <h2 className={s.lastPostsContainer__header__title}>Najnowsze</h2>
      </div>
      <section className={s.lastPostsContainer__contentWrapper}>
        <section className={s.lastPostsContainer__lastPostWrapper}>
          <div className={s.lastPostsContainer__lastPostWrapper__post}>
            <div
              className={
                s.lastPostsContainer__lastPostWrapper__post__imageWrapper
              }
            >
              <Image
                className={
                  s.lastPostsContainer__lastPostWrapper__post__imageWrapper__img
                }
                width={250}
                height={150}
                src={img}
                alt=""
              />
            </div>
            <div
              className={s.lastPostsContainer__lastPostWrapper__post__content}
            >
              <h3
                className={
                  s.lastPostsContainer__lastPostWrapper__post__content__title
                }
              >
                Jak zacząć się uczyć React w 2024 roku ?
              </h3>
              <p
                className={
                  s.lastPostsContainer__lastPostWrapper__post__content__description
                }
              >
                Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o
                tematyce tworzenia stron internetowych. Koniecznie musisz je
                znać
              </p>
              <div
                className={
                  s.lastPostsContainer__lastPostWrapper__post__content__sub
                }
              >
                <span
                  className={
                    s.lastPostsContainer__lastPostWrapper__post__content__sub__author
                  }
                >
                  Oliwier Markiewicz
                </span>
                <span
                  className={
                    s.lastPostsContainer__lastPostWrapper__post__content__sub__author
                  }
                >
                  05.04.2024
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={s.lastPostsContainer__otherLastPostContainer}>
          <section className={s.lastPostsContainer__otherLastPostWrapper}>
            <div className={s.lastPostsContainer__otherLastPostWrapper__post}>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper
                }
              >
                <Image
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper__img
                  }
                  width={250}
                  height={100}
                  src={img}
                  alt=""
                />
              </div>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__content
                }
              >
                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__category
                  }
                >
                  React
                </div>
                <h3
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__title
                  }
                >
                  Jak zacząć się uczyć React w 2024 roku ?
                </h3>

                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__sub
                  }
                >
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    Oliwier Markiewicz
                  </span>
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    05.04.2024
                  </span>
                </div>
              </div>
            </div>
          </section>{" "}
          <section className={s.lastPostsContainer__otherLastPostWrapper}>
            <div className={s.lastPostsContainer__otherLastPostWrapper__post}>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper
                }
              >
                <Image
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper__img
                  }
                  width={250}
                  height={100}
                  src={img}
                  alt=""
                />
              </div>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__content
                }
              >
                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__category
                  }
                >
                  React
                </div>
                <h3
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__title
                  }
                >
                  Jak zacząć się uczyć React w 2024 roku ?
                </h3>

                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__sub
                  }
                >
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    Oliwier Markiewicz
                  </span>
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    05.04.2024
                  </span>
                </div>
              </div>
            </div>
          </section>{" "}
          <section className={s.lastPostsContainer__otherLastPostWrapper}>
            <div className={s.lastPostsContainer__otherLastPostWrapper__post}>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper
                }
              >
                <Image
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__imageWrapper__img
                  }
                  width={250}
                  height={100}
                  src={img}
                  alt=""
                />
              </div>
              <div
                className={
                  s.lastPostsContainer__otherLastPostWrapper__post__content
                }
              >
                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__category
                  }
                >
                  React
                </div>
                <h3
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__title
                  }
                >
                  Jak zacząć się uczyć React w 2024 roku ?
                </h3>

                <div
                  className={
                    s.lastPostsContainer__otherLastPostWrapper__post__content__sub
                  }
                >
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    Oliwier Markiewicz
                  </span>
                  <span
                    className={
                      s.lastPostsContainer__otherLastPostWrapper__post__content__sub__author
                    }
                  >
                    05.04.2024
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default LastPosts;
