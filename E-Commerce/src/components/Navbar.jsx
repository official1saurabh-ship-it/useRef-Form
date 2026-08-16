function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyStore</h1>

      {/* Navigation Links */}
      <div className="flex gap-8 items-center">
        <a href="/" className="hover:text-blue-400 transition">
          Home
        </a>

        <a href="/products" className="hover:text-blue-400 transition">
          Products
        </a>

        <a
          href="/login"
          className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
