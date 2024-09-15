"use client"
import BaseLayout from "@/components/Layouts/BaseLayouts";
import PropertyLists from "@/components/Lists/PropertyLists";
import useMyFavorites from "@/hooks/useMyFavorites";
import React from "react";

export default function page() {
  const { myFavorites } = useMyFavorites();
  console.log(myFavorites)
  return (
    <BaseLayout>
      <div className="custom-container space-y-2 md:space-y-12">
        <h1 className="font-bold text-lg md:text-2xl">My Favorite</h1>
        <PropertyLists properties={myFavorites} />
      </div>
    </BaseLayout>
  );
}
