"use client";
import GalleryItems from "@/components/Features/Listings/GalleryItems";
import SpecItem from "@/components/Features/Listings/SpecItem";
import BaseLayout from "@/components/Layouts/BaseLayouts";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import Image from "next/image";
import properties from "@/components/Data/properties";
import useMyFavorites from "@/hooks/useMyFavorites";
import { HiOutlineHeart } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import agents from "@/components/Data/agents";
import { notFound, useSearchParams } from "next/navigation";
import Link from "next/link";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

export default function DetailPage({ params }) {
  const searchParams = useSearchParams();
  const agentId = searchParams.get("exclude");
  const { handleFavorites, handelCheckFavoriters } = useMyFavorites();
  const { slug } = params;

  const property = properties.find((items) => items.slug === slug);

  const getIdAgents = agents.find(
    (items) => items.agents_id === parseInt(agentId)
  );
  if (!property) {
    return notFound()
  }

  return (
    <BaseLayout theme="light">
      <div className="custom-container space-y-6">
        <div className=" space-y-6 md:space-y-0 md:flex md:justify-start md:gap-10">
          <div className="md:w-3/4">
            {/* big Image */}
            <Image
              src={property?.tumbnail}
              alt="detail"
              width={956}
              height={666}
              className="w-full h-[300px] md:h-[600px] object-cover object-center rounded-xl"
            />
          </div>
          <div className="md:w-1/4">
            <div className="flex md:flex-col md:h-[600px] flex-nowrap overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll Gallery pb-3 gap-4 md:pr-3">
              {/* galleries */}
              {property.galleries.map((items, index) => {
                return (
                  <GalleryItems img={items.image} key={index} alt={items.alt} />
                );
              })}
            </div>
          </div>
        </div>
        {/* detail Contain & agent */}
        <div className="md:flex md:gap-10 md:items-start">
          {/* contain & desc */}
          <div className="md:w-3/4">
            {/* constain */}
            <div>
              {/* main info */}
              <div className=" space-y-3 md:flex md:justify-between md:items-center md:space-y-0">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
                  <p className="text-gray-600">{property.location}</p>
                </div>
                <p className="text-xl">
                  Rp {property.price}/
                  <span className="text-sm font-normal">month</span>
                </p>
              </div>
            </div>
            {/* desc & speci*/}
            <div className="md:flex md:justify-between md:gap-10 md:pt-10">
              {/* desc */}
              <div className="md:w-2/3">
                <h2 className="font-bold text-xl mb-3 md:mb-6">
                  {property.description_title}
                </h2>
                <div className="prose max-w-full text-sm md:text-base">
                  {property.description}
                  <p className="mt-5 mb-[-13px]">Comprising</p>
                  {property.description_list.map((items, index) => (
                    <ul key={index}>
                      <li>{items.desc}</li>
                    </ul>
                  ))}
                </div>
              </div>
              {/* spec */}
              <div className="md:w-1/3 space-y-3 md:space-y-6 pt-6 md:pt-0">
                <p className="font-bold text-lg">Specification</p>
                <div className="space-y-1 md:space-y-3">
                  <SpecItem
                    icon="/asset/icons/detail/ic-bed.svg"
                    title="Kamar Tidur"
                    value={property.specification.bed_room}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-bath.svg"
                    title="Kamar Mandi"
                    value={property.specification.bath_room}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-land.svg"
                    title="Luas Tanah"
                    value={property.specification.land_area}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-house.svg"
                    title="Luas Bangunan"
                    value={property.specification.land_house}
                  />
                  {/* <SpecItem
                    icon="/asset/icons/detail/ic-apart.svg"
                    title="Tipe Properti"
                    value="3"
                  /> */}
                  <SpecItem
                    icon="/asset/icons/detail/ic-certif.svg"
                    title="Sertifikat"
                    value={property.specification.certificate}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-electric.svg"
                    title="Daya Listrik"
                    value={property.specification.electric}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-period.svg"
                    title="Periode Sewa"
                    value={property.specification.rent_period}
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-m2.svg"
                    title="Harga / m2"
                    value={property.specification.price_per_m2}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* agent */}
          <div className="space-y-6 p-6 shadow-lg rounded-xl md:w-1/4 mt-7 md:mt-0">
            <div className="flex gap-3">
              <Image
                className="w-12 h-12 rounded-full object-cover"
                src={getIdAgents?.profile_picture}
                width={53}
                height={53}
                alt="sllsls"
              />
              <div>
                <p className="font-bold text-lg mb-1">{getIdAgents?.name}</p>
                <p className="text-gray-600">
                  Member since {getIdAgents?.joined_date.split("/").pop()}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Link
                href={`//wa.me/${getIdAgents?.phone}`}
                className="btn btn-success text-white btn-block"
              >
                <FaWhatsapp className="text-xl md:text-2xl" />
                Contact Agent
              </Link>
              <button
                onClick={() => handleFavorites(property)}
                className="btn btn-outline btn-block"
              >
                {handelCheckFavoriters(property.property_id) ? (
                  <RiHeartFill className="text-primary text-xl md:text-2xl" />
                ) : (
                  <RiHeartLine className="text-primary text-xl md:text-2xl" />
                )}{" "}
                Save Property
              </button>
            </div>
          </div>
        </div>
        {/* recom */}
        <div className="space-y-6 md:space-y-8">
          <h4 className="text-lg md:text-xl font-bold">
            Recommendation for You
          </h4>
          <PropertyLists />
        </div>
        <CallToAction
          imge="/asset/image-2.png"
          title="Tired of looking ? Contact us for Recommendation"
        />
      </div>
    </BaseLayout>
  );
}
