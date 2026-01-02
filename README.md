# 🛍️ React Product Dashboard

A modern, responsive **Product Dashboard** built using **React, Redux Toolkit, React Router, and Tailwind CSS**, powered by the **Fake Store API**.

This project demonstrates best practices in **state management, routing, UI optimization, and persistence using localStorage**.

---

## 🚀 Live Features

✨ **Product Listing**
- Responsive product grid
- Fast loading via Redux async thunks

🔍 **Search, Filter & Sort**
- Debounced search by product title
- Filter by category
- Sort by price (Low → High / High → Low)

📦 **Product Detail Page**
- Complete product information
- Add / Remove from favorites

❤️ **Favorites**
- Favorites stored in Redux
- Persisted using `localStorage`
- Dedicated Favorites page
- Favorites count indicator

🔁 **Smooth Navigation**
- React Router based routing
- Back navigation for better UX

---

## 🧰 Tech Stack

- **React (Functional Components + Hooks)**
- **Vite** (Fast development & build)
- **Redux Toolkit** (State management)
- **React Router DOM**
- **Tailwind CSS** (Responsive UI)
- **Axios** (API calls)
- **Fake Store API**

---

## 📂 Project Structure

src/
├── components/
│ ├── common/
│ │ └── SearchBar.jsx
│ ├── ProductList.jsx
│ ├── ProductDetail.jsx
│ └── Favorites.jsx
├── redux/
│ ├── slice/
│ │ ├── productSlice.js
│ │ └── favoritesSlice.js
│ └── store.js
├── App.jsx
└── main.jsx

Clone the repository:

```bash
git clone 
cd 