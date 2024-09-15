"use client";
import React, { useEffect, useState } from "react";
import PropertyCard from "../UI/PropertyCard";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PropertyLists({ properties = [] }) {
  const searchParams = useSearchParams();
  // const typeProprty = searchParams.get("type");
  // const totbedsRoom = searchParams.get("bed_room");
  // const locationProprty = searchParams.get("location");
  const {
    type: typeProprty,
    bed_room: totbedsRoom,
    location: locationProprty,
  } = Object.fromEntries(searchParams);

  const filterdata = properties.filter((items) => {
    let bed_room = totbedsRoom
      ? items.specification.bed_room === totbedsRoom
      : true;
    let location = locationProprty
      ? items.location.toLowerCase().includes(locationProprty?.toLowerCase())
      : true;
    let type = typeProprty
      ? items.title.toLowerCase().includes(typeProprty?.toLowerCase())
      : true;
    return bed_room && location && type;
  });

  return (
    <>
      {filterdata.length === 0? (
        <div className="text-center space-y-2 md:space-y-12">
          <Image width={400} height={400} src="/asset/3d-empty-house.svg" className="mx-auto"/>
          <p className="text-xl font-bold">No properties found..</p>
        </div>
      ):(
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*properties card */}
          {filterdata.map((items, index) => {
            return <PropertyCard items={items} key={index} />;
          })}
        </div>
        )
      }
    </>
  );
}
