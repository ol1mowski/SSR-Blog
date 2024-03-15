import { useRef, useEffect, useContext } from "react";
import HamburgerMenuComponent from "./HamburgerMenuComponent/HamburgerMenuComponent";
import HamburgerClickContext from "@/store/HamburgerClickContext";

const HamburgerMenu = () => {
  // const { setSearchCategory } = useContext(SearchCategoryContext);

  // const searchCategoryInput = useRef(null);

  const { setClick } = useContext(HamburgerClickContext);

  const hideMenuHandler = () => {
    setClick(false);
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

  return <HamburgerMenuComponent hideMenuHandler={hideMenuHandler} />;
};

export default HamburgerMenu;
