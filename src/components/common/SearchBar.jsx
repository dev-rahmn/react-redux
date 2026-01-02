import { useEffect, useState } from "react";

export default function SearchBar({
  searchValue = "",
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  delay = 500,
}) {
  const [inputValue, setInputValue] = useState(searchValue);

  // sync when parent changes
  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue, onSearchChange, delay]);

  return (
    <div className=" rounded-2xl shadow-sm p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 🔍 Search */}
        <div className="col-span-1 sm:col-span-2">
          <input
            type="text"
            placeholder="Search products..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="search"
            className="
              w-full
              px-4 py-3
              rounded-full
              border border-gray-300
              text-sm
              outline-none
              focus:outline-none
              focus:ring-0
              focus:border-gray-400
              transition
            "
          />
        </div>

        {/* 📂 Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="
            w-full
            px-4 py-3
            rounded-full
            border border-gray-300
            text-sm
            bg-white
            outline-none
            focus:outline-none
            focus:ring-0
            focus:border-gray-400
            transition
          "
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>

        {/* 💰 Sort */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="
            w-full
            px-4 py-3
            rounded-full
            border border-gray-300
            text-sm
            bg-white
            outline-none
            focus:outline-none
            focus:ring-0
            focus:border-gray-400
            transition
          "
        >
          <option value="none">Sort by Price</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>
    </div>
  );
}
