import GalleryItems from "@/components/Features/Listings/GalleryItems";
import SpecItem from "@/components/Features/Listings/SpecItem";
import BaseLayout from "@/components/Layouts/BaseLayouts";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
export default function DetailPage() {
  return (
    <BaseLayout theme="light">
      <div className="custom-container space-y-6">
        <div className=" space-y-6 md:space-y-0 md:flex md:justify-start md:gap-10">
          <div className="md:w-3/4">
            {/* big Image */}
            <Image
              src="/asset/product-1.png"
              alt="detail"
              width={956}
              height={666}
              className="w-full h-[300px] md:h-[600px] object-cover object-center rounded-xl"
            />
          </div>
          <div className="md:w-1/4">
            <div className="flex md:flex-col md:h-[600px] flex-nowrap overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll Gallery pb-3 gap-4 md:pr-3">
              {/* galleries */}
              <GalleryItems img="/asset/detail-1.png" />
              <GalleryItems img="/asset/detail-3.png" />
              <GalleryItems img="/asset/detail-4.png" />
              <GalleryItems img="/asset/detail-5.png" />
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
                  <h1 className="text-2xl font-bold mb-2">
                    Rumah Classic di Menteng
                  </h1>
                  <p className="text-gray-600">Jakarta Barat, DKI Jakarta</p>
                </div>
                <p className="text-xl">
                  Rp 2,999,999 /
                  <span className="text-sm font-normal">month</span>
                </p>
              </div>
            </div>
            {/* desc & speci*/}
            <div className="md:flex md:justify-between md:gap-10 md:pt-10">
              {/* desc */}
              <div className="md:w-2/3">
                <h2 className="font-bold text-xl mb-3 md:mb-6">
                  Northern views in a corner apartment
                </h2>
                <div className="prose max-w-full text-sm md:text-base">
                  401/211 DORCAS STREET, SOUTH MELBOURNE Anyone for a BBQ?
                  imagine soaking up the sun on your huge North facing
                  entertainer's terrace.
                  <p className="mt-5 mb-[-13px]">Comprising</p>
                  <ul>
                    <li>
                      Two Bedrooms both with built in robes, master with
                      ensuite.
                    </li>
                    <li>Two Bathrooms, with laundry in main.</li>
                    <li> Air Conditioning for year-round comfort.</li>
                    <li>
                      Kitchen with gas cooking, oven and dishwasher finished in
                      stone and glass.
                    </li>
                    <li>25m2+ wrap around paved terrace.</li>
                    <li>Secure off street car park.</li>
                    <li>Basement storage cage.</li>
                    <li>Centrally located in the heart of South Melbourne.</li>
                    <li>Only moments' walk to Clarendon St shopping strip.</li>
                    <li>100m to the no12 Tram to Collins.</li>
                  </ul>
                </div>
              </div>
              {/* spec */}
              <div className="md:w-1/3 space-y-3 md:space-y-6 pt-6 md:pt-0">
                <p className="font-bold text-lg">Specification</p>
                <div className="space-y-1 md:space-y-3">
                  <SpecItem
                    icon="/asset/icons/detail/ic-bed.svg"
                    title="Kamar Tidur"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-bath.svg"
                    title="Kamar Mandi"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-land.svg"
                    title="Luas Tanah"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-house.svg"
                    title="Luas Bangunan"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-apart.svg"
                    title="Tipe Properti"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-certif.svg"
                    title="Sertifikat"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-electric.svg"
                    title="Daya Listrik"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-period.svg"
                    title="Periode Sewa"
                    value="3"
                  />
                  <SpecItem
                    icon="/asset/icons/detail/ic-m2.svg"
                    title="Harga / m2"
                    value="3"
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
                src="/asset/agent-1.png"
                width={53}
                height={53}
              />
              <div>
                <p className="font-bold text-lg mb-1">Al Biruni</p>
                <p className="text-gray-600">Member since 2014</p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="btn btn-success text-white btn-block">
                <FaWhatsapp className="text-base" />
                Contact Agent
              </button>
              <button className="btn btn-outline btn-block">
                <HiOutlineHeart className="text-base" /> Save Property
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
