import Image from "next/image";
import { FiHeart } from "react-icons/fi";
export default function PropertyCard() {
  return (
    <div className=" rounded-lg md:rounded-xl border rounded-gray-200 overflow-hidden">
      <div className="h-[230px] md:h-[200px] 2xl:h-[250px] relative">
        <Image
          className="w-full h-[230px] md:h-[200px] 2xl:h-[250px] object-cover object-center"
          src="/asset/product-2.png"
          width={400}
          height={400}
        />
        <button className="w-[46px] h-[46px] rounded-full bg-white absolute right-0 translate-y-[-20px] translate-x-[-20px] flex items-center justify-center active:scale-[1.1] transition-all ">
          <FiHeart className="text-primary text-xl " />
        </button>
      </div>
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        <div className="space-y-1 md:space-y-2">
          <p>
            <span className="text-primary">Rp 2,999,999</span> / month
          </p>
          <p className="text-xl font-bold">Rumah Classic Menteng</p>
          <p className="text-sm text-gray-600">
            2699 Green Valley, Highland Lake, FL
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-sm max-w-full md:max-w-[90%] mx-auto">
          <div className="flex gap-2">
            <Image src="/asset/icons/ic-bed-small.svg" width={21} height={20} />
            <p>3 Beds</p>
          </div>
          <div className="flex">
            <Image
              src="/asset/icons/ic-bath-small.svg"
              width={21}
              height={20}
            />
            <p>3 Beth Rooms</p>
          </div>
          <div className="flex">
            <Image
              src="/asset/icons/ic-land-small.svg"
              width={21}
              height={20}
            />
            <p>20 x 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
