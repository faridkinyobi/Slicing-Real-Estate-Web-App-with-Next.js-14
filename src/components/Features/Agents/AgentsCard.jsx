import React from "react";
import Image from "next/image";
import properties from "@/components/Data/properties";
import Link from "next/link";
export default function AgentsCard({ items }) {
  const getOneToManyAgenProperti = properties.filter(
    (post) => post.agents_id === items.agents_id
  );
  return (
    <div className="p-3 md:p-6 rounded-lg md:rounded-xl border border-gray-200 ">
      <div className="space-y-6">
        <div className="space-y-6 relative">
          {/* agents profil dan name */}
          <div className="flex items-center gap-3">
            {/* profil */}
            <div>
              <Image
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                src={items.profile_picture}
                width={53}
                height={53}
                alt="profil"
              />
            </div>
            <div>
              <p className="font-bold md:text-lg">{items.name}</p>
              <span className="text-gray-600 text-sm md:text-base">
                {items.joined_date.split("/").pop()}
              </span>
            </div>
            <Link href={`agents/${items.slug}`} className=" absolute indent-0 w-full h-full"></Link>
          </div>
        </div>
        {/* agents stats */}
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-xs md:text-base">Total Properti</p>
            <p className="font-bold md:text-xl">{items.total_property}</p>
          </div>
          <div className="text-center">
            <p className="text-xs md:text-base">Total Terjual</p>
            <p className="font-bold md:text-xl">{items.total_sold_property}</p>
          </div>
          <div className="text-center">
            <p className="text-xs md:text-base">Total Terjual</p>
            <p className="font-bold md:text-xl">
              Rp {items.price_renge_property}
            </p>
          </div>
        </div>
        {/* agansts ads */}
        <div className="space-y-2">
          <p className="text-gray-600 md:text-base">List Iklan</p>
          <div className="grid grid-cols-3 gap-4">
            {getOneToManyAgenProperti.map((items, index) => {
              return (
                <Link
                  className="w-full"
                  href={`listings/${items.slug}?exclude=${items.agents_id}`}
                >
                  <Image
                    className=" w-full h-[48px] md:h-[88px] object-cover rounded-lg"
                    src={items.tumbnail}
                    width={182}
                    height={53}
                    key={index}
                    alt="detail"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
