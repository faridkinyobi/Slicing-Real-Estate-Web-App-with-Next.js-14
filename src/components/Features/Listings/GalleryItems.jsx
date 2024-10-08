import React from 'react'
import Image from 'next/image'
export default function GalleryItems({img,alt}) {
  return (
    <Image
    src={img}
    alt={alt}
    width={320}
    height={253.54}
    className="w-[70px] md:w-full h-[70px] md:h-[200px] object-cover  rounded-xl mr-2"
  />
  )
}
