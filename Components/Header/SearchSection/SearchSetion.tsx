import { useContext, useRef } from "react";

import SearchCategoryContext from "@/store/SearchCategoryContext";
import SearchIcon from "./SearchComponents/Search-Icon-Component/SearchIcon.components";
import SearchField from "./SearchComponents/Search-Field-Component/SearchField.component";

const SearchSetion = () => {
  const { setIsVisible, setSearchCategory, isVisible } = useContext(
    SearchCategoryContext
  );

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

  const searchBehavior = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = "";
    setIsVisible(false);
    const postsElement = document.getElementById("posts")!;
    postsElement.scrollIntoView({ behavior: "smooth" });
  };

  const categoryKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchCategory(e.currentTarget.value);
      searchBehavior(e as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const categoryClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchCategoryInput.current) {
      const searchValue = searchCategoryInput.current.value;
      setSearchCategory(searchValue);
      searchBehavior(e);
    }
  };

  return (
    // <SearchComponent
    //   showSearchSectionHandler={showSearchSectionHandler}
    //   // unBlurryBackgroundHandler={unBlurryBackgroundHandler}
    //   // categoryClickHandler={categoryClickHandler}
    //   // categoryKeyHandler={categoryKeyHandler}
    //   // searchSection={searchSection}
    //   // searchCategoryInput={searchCategoryInput}
    // />
    <>
      <SearchIcon showSearchSectionHandler={showSearchSectionHandler} />

      {isVisible ? (
        <SearchField
          unBlurryBackgroundHandler={unBlurryBackgroundHandler}
          hideSearchSectionHandler={hideSearchSectionHandler}
        />
      ) : null}
    </>
  );
};

export default SearchSetion;
