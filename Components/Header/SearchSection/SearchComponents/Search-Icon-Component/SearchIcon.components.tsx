import s from "./SearchIcon.components.module.scss";

type SearchIconProps = {
  showSearchSectionHandler: () => void;
};

const SearchIcon = ({ showSearchSectionHandler }: SearchIconProps) => {
  return (
    <>
      <img
        onClick={showSearchSectionHandler}
        className={s.search}
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/000000/search--v1.png"
        alt="search--v1"
      />
    </>
  );
};

export default SearchIcon;
