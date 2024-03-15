import { createContext } from "react";

type SearchCategoryContextType = {
  searchCategory: string | null;
  setSearchCategory: (value: string) => void;
};

const SearchCategoryContext = createContext<SearchCategoryContextType>({
  searchCategory: "",
  setSearchCategory: (category: string) => {},
});

export default SearchCategoryContext;
