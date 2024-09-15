import Image from "next/image";
import React from "react";

export default function SpecItem({icon,title,value}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 ">
        <Image src={icon} width={20} height={21} alt="detail" />
        <p className="text-lg font-normal">{title}</p>
      </div>
      <p className="font-bold">{value}</p>
    </div>
  );
}
