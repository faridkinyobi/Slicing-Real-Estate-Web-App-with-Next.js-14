import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tm = useTranslations("menu");
  return (
    <footer className="bg-[#FBFBFB] py-6 md:pt-12">
      <div className="custom-container space-y-6 md:flex md:justify-between">
        <div className="md:w-2/4">
          <Image
            src="/asset/logo.svg"
            width={155}
            height={24}
            alt="logo-white"
          />
          <p className=" text-gray-600 mt-3 text-sm md:text-base leading-relaxed md:leading-loose">
            {t("Description")}
          </p>
        </div>
        <div className="menu-wrapper space-y-2">
          <p className="font-bold  text-black">{t("Menu")}</p>
          <ul className=" space-y-3 text-gray-600 text-sm md:text-base">
            <li>
              <Link href="/">{tm("HomePage")}</Link>
            </li>
            <li>
              <Link href="/listings">{tm("Listings")}</Link>
            </li>
            <li>
              <Link href="/agents">{tm("Agents")}</Link>
            </li>
            <li>
              <Link href="/My Favorites">{tm("My Favorites")}</Link>
            </li>
          </ul>
        </div>
        <div className="menu-wrapper space-y-2">
          <p className="font-bold  text-black">{t("Contact Us")}</p>
          <ul className=" space-y-1 text-gray-600 text-sm md:text-base">
            <li>
              <a href="" className=" flex items-start gap-1">
                <Image
                  src="/asset/icons/ic-location.svg"
                  width={24}
                  height={24}
                  alt="icon"
                  className="inline mr-2"
                />
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </a>
            </li>
            <li>
              <a href="" className=" flex items-start gap-1">
                <Image
                  src="/asset/icons/ic-mail.svg"
                  width={24}
                  height={24}
                  alt="icon"
                  className="inline mr-2"
                />
                pros_property@test.dev
              </a>
            </li>
            <li>
              <a href="" className=" flex items-start gap-1">
                <Image
                  src="/asset/icons/ic-whatsapp.svg"
                  width={24}
                  height={24}
                  alt="icon"
                  className="inline mr-2"
                />
                +6284523423431
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-10 md:py-4 text-center md:mt-12 text-black">
        <p>© 2024 {t("Dream Homes Realty")} All rights reserved.</p>
      </div>
    </footer>
  );
}
