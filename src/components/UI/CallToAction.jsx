import Image from "next/image";
import React from "react";

export default function CallToAction({
  imge = "/asset/image-1.png",
  title = "You’ve found a neighbour you love",
}) {
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
            {title}
          </h4>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed md:leading-[1.8] ">
            When you owned home, you’re comitting to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighbourhood
          </p>
          <button className="btn btn-outline">Cuntact Us</button>
        </div>
      </div>
    </section>
  );
}
