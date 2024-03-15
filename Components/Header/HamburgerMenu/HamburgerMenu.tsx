import { useContext } from "react";

import HamburgerMenuComponent from "./HamburgerMenuComponent/HamburgerMenuComponent";
import HamburgerClickContext from "@/store/HamburgerClickContext";

const HamburgerMenu = () => {
  const { setClick } = useContext(HamburgerClickContext);

  const hideMenuHandler = () => {
    setClick(false);
  };

  return <HamburgerMenuComponent hideMenuHandler={hideMenuHandler} />;
};

export default HamburgerMenu;
