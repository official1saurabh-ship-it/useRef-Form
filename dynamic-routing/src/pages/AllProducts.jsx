import React, { useContext, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MyContext";

const AllProducts = () => {
  const { products, setProducts } = useContext(MyStore);
  const getAllProducts = async () => {
    try {
      let products1 = await axios("https://fakestoreapi.com/products");

      setProducts(products1.data);
      // localStorage.setItem("products", JSON.stringify(products1.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-3 pt-4">
      {products.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default AllProducts;
