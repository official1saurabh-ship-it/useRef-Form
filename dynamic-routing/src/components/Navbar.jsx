import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MyStore</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-blue-400"
          >
            Home
          </div>

          <div
            onClick={() => navigate("/allproduct")}
            className="cursor-pointer hover:text-blue-400"
          >
            All Products
          </div>

          <div
            onClick={() => navigate("/product")}
            className="cursor-pointer hover:text-blue-400"
          >
            Product
          </div>
          <div
            onClick={() => navigate("/multipleproduct")}
            className="cursor-pointer hover:text-blue-400"
          >
            AddMultipleProduct
          </div>

          <div className="cursor-pointer text-red-400 hover:text-red-500">
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
