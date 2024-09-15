import { FavoriteContext } from "@/context/FavoritesProvider";
import React, { useContext } from "react";

export default function useMyFavorites() {
  const { myFavorites, setMayFavorites } = useContext(FavoriteContext);

  const handelCheckFavoriters = (property_id) => {
    const foundFavorite = myFavorites.find(
      (fav) => fav.property_id === property_id
    );
    return foundFavorite ? true : false;
  };
  const handleFavorites = (items) => {
    const foundFavorite = myFavorites.find(
      (fav) => fav.property_id === items.property_id
    );
    if (foundFavorite) {
      const filterFavorit = myFavorites.filter(
        (fav) => fav.property_id !== items.property_id
      );
      setMayFavorites(filterFavorit);
      alert("Berhasil dihapus");
      window.localStorage.setItem(
        "__My_FAVORITES",
        JSON.stringify(filterFavorit)
      );
      return;
    }
    setMayFavorites((prev) => {
      const newFovorites = [...prev, items];
      window.localStorage.setItem(
        "__My_FAVORITES",
        JSON.stringify(newFovorites)
      );
      return newFovorites;
    });
    alert("Berhasil ditambahkan");
  };
  return { myFavorites, setMayFavorites, handleFavorites, handelCheckFavoriters };
}
