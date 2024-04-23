"use client";

import Footer from "@/Components/Footer/Footer.component";
import Header from "@/Components/Header/Header";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import PostVisibleContext from "@/store/PostVisableContext";
import SearchCategoryContext from "@/store/SearchCategoryContext";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [click, setClick] = useState<boolean>(false);

  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const [sectionVisible, setSectionVisible] = useState<{
    sectionName: string;
    isVisible: boolean;
  }>({ sectionName: "", isVisible: false });

  const [category, setCategory] = useState<string | null>(null);

  return (
    <html lang="pl-PL">
      <body>
        <PostVisibleContext.Provider
          value={{
            sectionVisible: sectionVisible,
            setSectionVisible(sectionName, isVisible) {
              setSectionVisible({
                sectionName: sectionName,
                isVisible: isVisible,
              });
            },
          }}
        >
          <SearchCategoryContext.Provider
            value={{
              isVisible: isSearchVisible,
              setIsVisible: (isVisible: boolean) =>
                setIsSearchVisible(isVisible),
              searchCategory: category,
              setSearchCategory: (searchCategory: string) =>
                setCategory(searchCategory),
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
              <Footer />
            </HamburgerClickContext.Provider>
          </SearchCategoryContext.Provider>
        </PostVisibleContext.Provider>
      </body>
    </html>
  );
}

export default Root;
