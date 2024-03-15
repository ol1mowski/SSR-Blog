"use client";
import Header from "@/Components/Header/Header";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import SearchCategoryContext from "@/store/SearchCategoryContext";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [click, setClick] = useState<boolean>(false);

  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const [category, setCategory] = useState<string | null>(null);

  return (
    <html lang="en">
      <body>
        <SearchCategoryContext.Provider
          value={{
            isVisible: isSearchVisible,
            setIsVisible: (isVisible: boolean) => setIsSearchVisible(isVisible),
            searchCategory: category,
            setSearchCategory: () => setCategory,
          }}
        >
          <HamburgerClickContext.Provider
            value={{
              isClick: click,
              setClick: (click: boolean) => setClick(click),
            }}
          >
            <Header />
            {children}
          </HamburgerClickContext.Provider>
        </SearchCategoryContext.Provider>
      </body>
    </html>
  );
}

export default Root;
