import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/slice/favoritesSlice";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteIds = useSelector(
    (state) => state.favorites.ids
  );

  const products = useSelector(
    (state) => state.products.products
  );

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

if (favoriteProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Back Button */}
         <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-4 py-2 mx-4 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium shadow-sm
                        hover:bg-black hover:text-white hover:border-black
                        transition-all duration-300"
            aria-label="Back to products"
            >
            <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
                ←
            </span>
            <span>Back</span>
            </button>

        <p className="text-center mt-20 text-gray-500">
          No favorite products yet ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
       <div className="flex items-center justify-between gap-4 mb-6">
        <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-4 py-2 mx-4 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium shadow-sm
                        hover:bg-black hover:text-white hover:border-black
                        transition-all duration-300"
            aria-label="Back to products"
            >
            <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
                ←
            </span>
            <span>Back</span>
            </button>


        <h1 className="text-2xl font-bold">
          Your Favorites
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-3xl p-4 bg-white hover:shadow transition"
          >
            <div
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              className="cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain mb-3"
              />

              <h2 className="text-sm font-medium line-clamp-2">
                {product.title}
              </h2>

              <p className="font-semibold mt-2">
                ₹ {product.price}
              </p>
            </div>

            <button
              onClick={() =>
                dispatch(removeFromFavorites(product.id))
              }
              className="mt-4 w-full text-sm bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
