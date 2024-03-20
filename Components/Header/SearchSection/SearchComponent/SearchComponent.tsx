// import search from "../../../../../assets/search.svg";

import s from "./SearchSection.module.scss";

const SearchComponent = () => {
  return (
    <>
      <img
        // onClick={showSearchSectionHandler}
        className={s.search}
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/000000/search--v1.png"
        alt="search--v1"
      />
      <section
        // onClick={hideSearchSectionHandler}
        // ref={searchSection}
        className={s.searchSection}
      >
        <div
          // onClick={unBlurryBackgroundHandler}
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
            {/* <img width="20" height="20" src={search} alt="search--v1" /> */}
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchComponent;
