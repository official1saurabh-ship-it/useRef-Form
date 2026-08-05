import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
      <img
        src="https://picsum.photos/400/300"
        alt="Product"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Wireless Headphones
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">₹2,999</span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            Qty: 2
          </span>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200">
            Add to Cart
          </button>

          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition duration-200">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
