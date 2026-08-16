import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="h-64 flex items-center justify-center p-6 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">⭐ {product.rating.rate}</span>

          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
