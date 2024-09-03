import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Link as NavLink } from "@/navigation";
export default function Menu({ scrolled }) {
  const t = useTranslations("menu");
  return (
    <ul
      className={` text-black space-y-6 md:flex md:space-y-0 gap-6 ${
        scrolled ? " md:text-black" : "md:text-white  "
      }`}
    >
      <li>
        <NavLink href="">{t("HomePage")}</NavLink>
      </li>
      <li>
        <NavLink href="/listings">{t("Listings")}</NavLink>
      </li>
      <li>
        <NavLink href="/agents">{t("Agents")}</NavLink>
      </li>
      <li>
        <NavLink href="/My Favorites">{t("My Favorites")}</NavLink>
      </li>
      <div className="dropdown dropdown-button md:dropdown-end">
        <div tabIndex={0} role="button" className="cursor-pointer">
          En
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-slate-50 rounded-box z-[1] w-52 p-2 shadow text-black"
        >
          <li>
            <Link href="/en">Inggris</Link>
          </li>
          <li>
            <Link href="/id">Indonesia</Link>
          </li>
        </ul>
      </div>
    </ul>
  );
}
