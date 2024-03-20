import { useContext, useEffect, useRef } from "react";

import SearchCategoryContext from "@/store/SearchCategoryContext";
import SearchIcon from "./SearchComponents/Search-Icon-Component/SearchIcon.components";
import SearchField from "./SearchComponents/Search-Field-Component/SearchField.component";

const SearchSetion = () => {
  const { setIsVisible, setSearchCategory, isVisible, searchCategory } =
    useContext(SearchCategoryContext);

  const searchCategoryInput = useRef<HTMLInputElement>(null);

  const showSearchSectionHandler = () => {
    setIsVisible(true);
  };

  const hideSearchSectionHandler = () => {
    setIsVisible(false);
  };

  const unBlurryBackgroundHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // const searchBehavior = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.target.value = "";
  //   setIsVisible(false);
  //   const postsElement = document.getElementById("posts")!;
  //   postsElement.scrollIntoView({ behavior: "smooth" });
  // };

  const categoryKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchCategory(e.currentTarget.value);
      // searchBehavior(e as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const categoryClickHandler = () => {
    if (searchCategoryInput.current) {
      const searchValue = searchCategoryInput.current.value;

      setSearchCategory(searchValue);
      // searchBehavior(e);
    }
  };

  return (
    <>
      <SearchIcon showSearchSectionHandler={showSearchSectionHandler} />

      {isVisible ? (
        <SearchField
          searchCategoryInput={searchCategoryInput}
          unBlurryBackgroundHandler={unBlurryBackgroundHandler}
          hideSearchSectionHandler={hideSearchSectionHandler}
          categoryClickHandler={categoryClickHandler}
          categoryKeyHandler={categoryKeyHandler}
        />
      ) : null}
    </>
  );
};

export default SearchSetion;
