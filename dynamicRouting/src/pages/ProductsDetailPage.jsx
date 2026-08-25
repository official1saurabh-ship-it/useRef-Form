import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductsDetailPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const showSingleProduct = async () => {
    try {
      const res = await axios(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showSingleProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* Page Heading */}
      <div className="mx-auto mb-8 max-w-5xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Product Details
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View complete information about this product
        </p>
      </div>

      {/* Product Card */}
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
        {/* Image */}
        <div className="flex w-full items-center justify-center bg-gray-50 p-10 md:w-1/2">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="h-[450px] w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          {/* Category */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {singleProduct.category}
          </p>

          {/* Title */}
          <h2 className="mb-5 text-3xl font-bold text-gray-900">
            {singleProduct.title}
          </h2>

          {/* Rating */}
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-lg bg-green-100 px-3 py-1 font-semibold text-green-700">
              ⭐ {singleProduct.rating?.rate}
            </span>

            <span className="text-sm text-gray-500">
              {singleProduct.rating?.count} ratings
            </span>
          </div>

          {/* Price */}
          <p className="mb-6 text-4xl font-bold text-gray-900">
            ${singleProduct.price}
          </p>

          {/* Description */}
          <p className="mb-8 leading-7 text-gray-600">
            {singleProduct.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Add to Cart
            </button>

            <button className="flex-1 rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailPage;
