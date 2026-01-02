import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";
import SearchBar from "./common/SearchBar";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const favoriteCount = useSelector(
    (state) => state.favorites.ids.length
  );

 
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    if (sort === "price-asc") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>

     
        <button
          onClick={() => navigate("/favorites")}
          className="relative px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          Favorites
          {favoriteCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {favoriteCount}
            </span>
          )}
        </button>
      </div>

      <div className="mb-6">
        <SearchBar
          searchValue={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer border bg-white border-gray-400 rounded-3xl p-4 hover:shadow transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-3"
            />

            <h2 className="text-sm font-medium line-clamp-2">
              {product.title}
            </h2>

            <p className="font-semibold mt-2">₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
