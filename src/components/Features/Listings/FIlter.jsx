"use client";
import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import FormSelect from "@/components/UI/FormSelect";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { usePathname, useRouter,useSearchParams } from "next/navigation";

export default function FIlter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    location: "",
    bed_room: "",
  });
  const isTablet = useMediaQuery("(min-width : 768px)");
  const t = useTranslations("listings");

  const handleFilterChange = (key, value) => {
    setFilter((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const HandleOnclik = () => {
    const query = {};

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        query[key] = value;
      }
    });
  
    const queryString = new URLSearchParams(query).toString(); // Mengonversi objek query menjadi string
    router.push(`${pathname}?${queryString}`);
  };
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 md:mt-4">
          {t("found properties")}:20,202
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-primary btn-sm btn-outline md:hidden"
        >
          <HiOutlineFilter />
        </button>
      </div>
      {(open || isTablet) && (
        <div className="bg-[#C8E4ff]/30 md:bg-transparent md:justify-end md:items-end  p-3 rounded-lg mt-3 md:flex md:gap-3">
          <FormSelect
            label="type"
            value={filter.type}
            option={[
              { label: "Home", value: "home"},
              { label: "Villa", value: "villa" },
              { label: "Apatermen", value: "apartment" },
            ]}
            onchange={(e) => handleFilterChange("type", e.target.value)}
          />
          <FormSelect
            label="bed room"
            value={filter.bed_room}
            option={[
              { label: "1 bedroom", value: 1 },
              { label: "2 bedroom", value: 2 },
              { label: "3 bedroom", value: 3 },
            ]}
            onchange={(e) => handleFilterChange("bed_room", e.target.value)}
          />
          <FormSelect
            label="location"
            value={filter.location}
            option={[
              { label: "solo", value: "solo" },
              { label: "jakarta", value: "jakarta" },
              { label: "Bali", value: "bali" },
            ]}
            onchange={(e) => handleFilterChange("location", e.target.value)}
          />
          <button
            className="btn btn-primary mt-3 w-full md:w-auto"
            onClick={HandleOnclik}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
}
