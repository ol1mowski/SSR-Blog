import Image from "next/image";
import s from "./SearchField.module.scss";

import img from "@/assets/search.png";

type SearchFieldProps = {
  hideSearchSectionHandler: () => void;
  unBlurryBackgroundHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
};

function SearchField({
  hideSearchSectionHandler,
  unBlurryBackgroundHandler,
}: SearchFieldProps) {
  return (
    <section onClick={hideSearchSectionHandler} className={s.searchSection}>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          unBlurryBackgroundHandler(e)
        }
        className={s.searchSection__searchPlace}
      >
        <input
          // ref={searchCategoryInput}
          // onKeyDown={categoryKeyHandler}
          placeholder="Enter category"
          type="text"
          name="search"
          className={s.searchSection__searchPlace__inp}
        />
        <button
          // onClick={categoryClickHandler}
          className={s.searchSection__searchPlace__btn}
        >
          <Image width="20" height="20" src={img} alt="search--v1" />
        </button>
      </div>
    </section>
  );
}

export default SearchField;
