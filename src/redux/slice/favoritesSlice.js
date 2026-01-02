import { createSlice } from "@reduxjs/toolkit";


const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("favoriteProductIds");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Save to localStorage
const saveToLocalStorage = (ids) => {
  localStorage.setItem(
    "favoriteProductIds",
    JSON.stringify(ids)
  );
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: loadFromLocalStorage(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload);
        saveToLocalStorage(state.ids);
      }
    },

    removeFromFavorites: (state, action) => {
      state.ids = state.ids.filter(
        (id) => id !== action.payload
      );
      saveToLocalStorage(state.ids);
    },

    clearFavorites: (state) => {
      state.ids = [];
      saveToLocalStorage([]);
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
