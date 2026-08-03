import React from "react";

const Products = ({ products, cart, setCart }) => {
  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((item) => {
        return (
          <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
            <img
              src={item.image}
              alt="Product"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>

              <p className="mt-2 text-gray-600">{item.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  {item.price}
                </span>

                <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
                >
                  Add to Cart
                </button>

                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition duration-200">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
