import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md p-5 mb-4 flex items-center gap-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h3 className="text-xl font-semibold">{item.name}</h3>

            <p className="text-gray-500">{item.description}</p>

            <p className="text-green-600 font-bold mt-2">₹{item.price}</p>
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
