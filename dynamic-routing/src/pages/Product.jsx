import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyStore } from "../context/MyContext";
import axios from "axios";

const Product = () => {
  const { id } = useParams();

  const { singleProduct, setSingleProduct } = useContext(MyStore);

  const getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="flex gap-10 p-10">
      <img
        src={singleProduct.image}
        alt={singleProduct.title}
        className="h-96 w-96 object-contain"
        singleProduct
      />
      <div>
        <h1 className="text-3xl font-bold">{singleProduct.title}</h1>

        <p className="mt-4 text-gray-600">{singleProduct.description}</p>

        <p className="mt-4 text-2xl font-bold">${singleProduct.price}</p>

        <p className="mt-2">⭐ {singleProduct.rating?.rate}</p>

        <p className="mt-2 text-gray-500">
          {singleProduct.rating?.count} reviews
        </p>
      </div>
    </div>
  );
};

export default Product;
