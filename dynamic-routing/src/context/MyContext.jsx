import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [addMultipleProducts1, setAddMultipleProducts1] = useState([
    {
      category: "",
      description: "",
      id: null,
      image: "",
      price: 0,
      rating: {
        rate: 0,
        count: 0,
      },
      title: "",
    },
  ]);

  return (
    <MyStore.Provider
      value={{
        products,
        setProducts,
        setSingleProduct,
        singleProduct,
        addMultipleProducts1,
        setAddMultipleProducts1,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
