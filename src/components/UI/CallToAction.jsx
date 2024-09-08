"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
export default function CallToAction({ imge, title }) {
  const t = useTranslations("CallToAction");
  return (
    <section className="py-12">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="">
          <Image
            className="w-full"
            src={imge}
            width={592}
            height={524}
            alt="Image-1"
          />
        </div>
        <div className="space-y-4 md:space-y-9 ">
          <h4 className="font-bold text-2xl md:text-5xl md:leading-[1.5]">
            {t(title)}
          </h4>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed md:leading-[1.8] ">
            {t("Description")}
          </p>
          <button className="btn btn-outline">{t("Cuntact Us")}</button>
        </div>
      </div>
    </section>
  );
}
