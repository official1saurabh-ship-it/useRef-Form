import React, { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../context/contextApi.jsx";
import ProductCard from "../components/ProductCard.jsx";

const ProductsPage = () => {
  let { products, setProducts } = useContext(MyContext);

  const AllProduct = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    AllProduct();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        {products.map((elem) => {
          return <ProductCard product={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
