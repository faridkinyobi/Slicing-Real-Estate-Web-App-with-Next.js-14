import React from "react";
import Image from "next/image";

export default function AgentsCard() {
  return (
    <div className="p-3 md:p-6 rounded-lg md:rounded-xl border border-gray-200 ">
      <div className="space-y-6">
        {/* agents profil dan name */}
        <div className="flex items-center gap-3">
          {/* profil */}
          <div>
            <Image
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
              src="/asset/agent-1.png"
              width={53}
              height={53}
            />
          </div>
          <div>
            <p className="font-bold md:text-lg">Esther Howard</p>
            <span className="text-gray-600 text-sm md:text-base">Member since 2020</span>
          </div>
        </div>
        {/* agents stats */}
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-xs md:text-base">Total Properti</p>
            <p className="font-bold md:text-xl">89</p>
          </div>
          <div className="text-center">
            <p className="text-xs md:text-base">Total Terjual</p>
            <p className="font-bold md:text-xl">0</p>
          </div>
          <div className="text-center">
            <p className="text-xs md:text-base">Total Terjual</p>
            <p className="font-bold md:text-xl">Rp 29M</p>
          </div>
        </div>
        {/* agansts ads */}
        <div className="space-y-2">
          <p className="text-gray-600 md:text-base">List Iklan</p>
          <div className="flex gap-4">
            <Image
              className=" w-full h-[48px] md:h-[80px] object-cover rounded-lg"
              src="/asset/product-1.png"
              width={182}
              height={53}
            />
            <Image
              className="w-full h-[48px] md:h-[80px] object-cover rounded-lg"
              src="/asset/product-1.png"
              width={182}
              height={53}
            />
            <Image
              className="w-full h-[48px] md:h-[80px] object-cover rounded-lg"
              src="/asset/product-1.png"
              width={182}
              height={53}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
