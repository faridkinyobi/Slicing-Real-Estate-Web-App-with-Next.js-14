"use client";
import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext(null);

export default function FavoritesProvider({ children }) {
  const [myFavorites, setMayFavorites] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMayFavorites(JSON.parse(localStorage.getItem("__My_FAVORITES")) || [])
    }
  },[]);
  return (
    <FavoriteContext.Provider value={{ myFavorites, setMayFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}
