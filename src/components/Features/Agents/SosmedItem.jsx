import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SosmedItem({ url, icon }) {

  return (
    <Link href={`${url}`} target="_blank" rel="noreferrer noopener">
      <Image
        className="w-6 h-6 md:w-8 md:h-8 object-cover"
        src={icon}
        width={36}
        height={36}
        alt="Social Media Icon"
      />
    </Link>
  );
}
