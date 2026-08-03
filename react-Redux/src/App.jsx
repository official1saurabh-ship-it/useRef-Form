import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://picsum.photos/400/300?random=1",
      name: "Wireless Headphones",
      description:
        "Noise-cancelling Bluetooth headphones with premium sound quality.",
      price: 2999,
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300?random=2",
      name: "Gaming Mouse",
      description: "Ergonomic RGB gaming mouse with adjustable DPI.",
      price: 1499,
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300?random=3",
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches.",
      price: 3999,
    },
    {
      id: 4,
      image: "https://picsum.photos/400/300?random=4",
      name: "Smart Watch",
      description: "Fitness tracking smartwatch with heart-rate monitoring.",
      price: 5499,
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?random=5",
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour battery life.",
      price: 2499,
    },
    {
      id: 6,
      image: "https://picsum.photos/400/300?random=6",
      name: "Laptop Backpack",
      description: "Water-resistant backpack with laptop compartment.",
      price: 1799,
    },
    {
      id: 7,
      image: "https://picsum.photos/400/300?random=7",
      name: "USB-C Hub",
      description: "Multi-port USB-C hub with HDMI and USB 3.0 ports.",
      price: 1299,
    },
    {
      id: 8,
      image: "https://picsum.photos/400/300?random=8",
      name: "Power Bank",
      description: "20000mAh fast-charging power bank.",
      price: 1999,
    },
    {
      id: 9,
      image: "https://picsum.photos/400/300?random=9",
      name: "Wireless Charger",
      description: "15W fast wireless charging pad for smartphones.",
      price: 999,
    },
    {
      id: 10,
      image: "https://picsum.photos/400/300?random=10",
      name: "4K Monitor",
      description: "27-inch Ultra HD monitor with IPS display.",
      price: 18999,
    },
    {
      id: 11,
      image: "https://picsum.photos/400/300?random=11",
      name: "DSLR Camera",
      description: "24MP DSLR camera with interchangeable lens.",
      price: 45999,
    },
    {
      id: 12,
      image: "https://picsum.photos/400/300?random=12",
      name: "Wireless Earbuds",
      description: "True wireless earbuds with ENC and touch controls.",
      price: 3499,
    },
    {
      id: 13,
      image: "https://picsum.photos/400/300?random=13",
      name: "External SSD",
      description: "1TB high-speed portable SSD storage.",
      price: 7999,
    },
    {
      id: 14,
      image: "https://picsum.photos/400/300?random=14",
      name: "Gaming Chair",
      description: "Comfortable ergonomic gaming chair with lumbar support.",
      price: 11999,
    },
    {
      id: 15,
      image: "https://picsum.photos/400/300?random=15",
      name: "Webcam",
      description: "1080p Full HD webcam with built-in microphone.",
      price: 2699,
    },
    {
      id: 16,
      image: "https://picsum.photos/400/300?random=16",
      name: "Tablet",
      description: "10-inch Android tablet with 128GB storage.",
      price: 15999,
    },
    {
      id: 17,
      image: "https://picsum.photos/400/300?random=17",
      name: "Smartphone",
      description: "6.7-inch AMOLED display with 5G connectivity.",
      price: 28999,
    },
    {
      id: 18,
      image: "https://picsum.photos/400/300?random=18",
      name: "Printer",
      description: "All-in-one wireless color inkjet printer.",
      price: 6999,
    },
    {
      id: 19,
      image: "https://picsum.photos/400/300?random=19",
      name: "Office Chair",
      description: "Adjustable ergonomic office chair with mesh back.",
      price: 8999,
    },
    {
      id: 20,
      image: "https://picsum.photos/400/300?random=20",
      name: "LED Desk Lamp",
      description: "Dimmable LED desk lamp with USB charging port.",
      price: 1499,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <Cart cart={cart} setCart={setCart} setToggle={setToggle} />
      ) : (
        <Products
          setToggle={setToggle}
          products={products}
          cart={cart}
          setCart={setCart}
        />
      )}
    </div>
  );
};

export default App;
