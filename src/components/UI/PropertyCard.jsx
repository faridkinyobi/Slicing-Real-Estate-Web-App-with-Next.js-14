
import useMyFavorites from "@/hooks/useMyFavorites";
import Image from "next/image";
import { RiHeartLine,RiHeartFill } from "react-icons/ri";
import { Link as PropertyLink } from "@/navigation";
export default function PropertyCard({ items }) {

  const { handleFavorites, handelCheckFavoriters } = useMyFavorites();
  return (
    <div className=" rounded-lg md:rounded-xl border rounded-gray-200 overflow-hidden">
      <div className="h-[230px] md:h-[200px] 2xl:h-[250px] relative">
        <PropertyLink href={`/listings/${items.slug}?exclude=${items.agents_id}`}>
          <Image
            className="w-full h-[230px] md:h-[200px] 2xl:h-[250px] object-cover object-center"
            src={items.tumbnail}
            width={400}
            height={400}
            alt="them"
          />
        </PropertyLink>
        <button
          onClick={() => handleFavorites(items)}
          className="w-[46px] h-[46px] rounded-full bg-white absolute right-0 translate-y-[-20px] translate-x-[-20px] flex items-center justify-center active:scale-[1.1] transition-all "
        >
          {handelCheckFavoriters(items.property_id) ? (
            <RiHeartFill className="text-primary text-xl md:text-2xl" />
          ) : (
            <RiHeartLine className="text-primary text-xl md:text-2xl" />
          )}
        </button>
      </div>
      <div className="p-4 md:p-6 space-y-4 md:space-y-6 ">
        <div className="space-y-1 md:space-y-2 relative">
          <p>
            <span className="text-primary">Rp {items.price}</span> / month
          </p>
          <p className="text-xl font-bold">{items.title}</p>
          <p className="text-sm text-gray-600">{items.location}</p>
          <PropertyLink
            href={`/listings/${items.slug}?exclude=${items.agents_id}`}
            className=" absolute inset-0 w-full h-full"
          ></PropertyLink>
        </div>
        <hr />
        <div className="flex justify-between text-sm max-w-full md:max-w-[90%] mx-auto">
          <div className="flex gap-2">
            <Image
              src="/asset/icons/ic-bed-small.svg"
              width={21}
              height={20}
              alt="Beth Rooms"
            />
            <p>{items.specification.bed_room} Beds</p>
          </div>
          <div className="flex">
            <Image
              src="/asset/icons/ic-bath-small.svg"
              width={21}
              height={20}
              alt="Beth Rooms"
            />
            <p>{items.specification.beth_room} Beth Rooms</p>
          </div>
          <div className="flex">
            <Image
              src="/asset/icons/ic-land-small.svg"
              width={21}
              height={20}
              alt="Beth Rooms"
            />
            <p>{items.specification.land_area}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
