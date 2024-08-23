"use client";

import { createContext, useContext, useState } from "react";

const context = createContext();

export const Provider = ({ children }) => {
  const [listView, setListView] = useState(false);

  // Function to toggle the listView state
  const toggleListView = () => {
    setListView((prev) => !prev);
  };

  return (
    <context.Provider
      value={{
        listView,
        toggleListView,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useListView = () => useContext(context);
