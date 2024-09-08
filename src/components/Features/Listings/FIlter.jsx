"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import FormSelect from "@/components/UI/FormSelect";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
export default function FIlter() {
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width : 768px)");
 const t = useTranslations("listings")
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 md:mt-4">{t("found properties")}:20,202</p>
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-primary btn-sm btn-outline md:hidden"
        >
          <HiOutlineFilter />
        </button>
      </div>
      {(open ||  isTablet ) && (
        <div className="bg-[#C8E4ff]/30 md:bg-transparent md:justify-end md:items-end  p-3 rounded-lg mt-3 md:flex md:gap-3">
          <FormSelect />
          <FormSelect />
          <FormSelect />
          <button className="btn btn-primary mt-3 w-full md:w-auto">Filter</button>
        </div>
      )}
    </div>
  );
}
