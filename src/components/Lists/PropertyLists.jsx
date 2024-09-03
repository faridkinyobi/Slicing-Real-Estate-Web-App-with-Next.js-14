import React from "react";
import PropertyCard from "../UI/PropertyCard";

export default function PropertyLists() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/*properties card */}
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
}
