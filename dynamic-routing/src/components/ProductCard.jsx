import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="w-72 rounded-xl border bg-white p-4 shadow-md">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-contain"
      />

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="line-clamp-2 text-lg font-semibold">{product.title}</h2>

        <p className="mt-2 text-sm text-gray-500">{product.category}</p>

        <p className="mt-2 text-gray-600">{product.description}</p>

        {/* Price & Rating */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <span className="rounded bg-yellow-100 px-2 py-1 text-sm">
            ⭐ {product.rating.rate}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {product.rating.count} reviews
        </p>

        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
