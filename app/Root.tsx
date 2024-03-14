"use client";
import Header from "@/Components/Header/Header";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [click, setClick] = useState<boolean>(false);
  return (
    <html lang="en">
      <body>
        <HamburgerClickContext.Provider
          value={{
            isClick: click,
            setClick: (click: boolean) => setClick(click),
          }}
        >
          <Header />
          {children}
        </HamburgerClickContext.Provider>
      </body>
    </html>
  );
}

export default Root;
