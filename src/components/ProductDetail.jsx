import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slice/favoritesSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );

  const favoriteIds = useSelector(
    (state) => state.favorites.ids
  );

  const isFavorite = favoriteIds.includes(Number(id));

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-2">
       <button
        onClick={() => navigate("/")}
        className="group flex items-center gap-2 px-4 py-2 mb-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium shadow-sm
                    hover:bg-black hover:text-white hover:border-black
                    transition-all duration-300"
        aria-label="Back to products"
        >
        <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
            ←
        </span>
        <span>Back</span>
        </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow p-2">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-semibold mb-4">
            ₹ {product.price}
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Category:{" "}
            <span className="capitalize font-medium">
              {product.category}
            </span>
          </p>

          {/* Favorite Button */}
          <button
            onClick={() =>
              isFavorite
                ? dispatch(removeFromFavorites(product.id))
                : dispatch(addToFavorites(product.id))
            }
            className={`mt-auto px-6 py-3 rounded-full font-medium transition-all ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isFavorite
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
