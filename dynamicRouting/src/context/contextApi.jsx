import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <MyContext.Provider value={{ products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
