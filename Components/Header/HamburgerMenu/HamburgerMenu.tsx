import { useRef, useEffect } from "react";

import HamburgerMenuComponent from "./HamburgerMenuComponent/HamburgerMenuComponent";

const HamburgerMenu = ({ showHamburgerMenu }) => {
  // const { setSearchCategory } = useContext(SearchCategoryContext);

  const searchCategoryInput = useRef(null);

  const hamburgerMenu = useRef(null);

  const showMenuHandler = () => {
    if (hamburgerMenu.current) {
      hamburgerMenu.current.style.display = "block";
    }
  };

  const hideMenuHandler = () => {
    hamburgerMenu.current.style.display = "none";
  };

  // const categoryKeyHandler = (e) => {
  //   if (e.key === "Enter") {
  //     setSearchCategory(e.target.value);
  //     e.target.value = "";
  //     hamburgerMenu.current.style.display = "none";
  //     const postsElement = document.getElementById("posts");
  //     postsElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const categoryClickHandler = (e) => {
  //   const searchValue = searchCategoryInput.current.value;
  //   setSearchCategory(searchValue);
  //   e.target.value = "";
  //   hamburgerMenu.current.style.display = "none";
  //   const postsElement = document.getElementById("posts");
  //   postsElement.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <HamburgerMenuComponent
      hamburgerMenu={hamburgerMenu}
      hideMenuHandler={hideMenuHandler}
    />
  );
};

export default HamburgerMenu;
