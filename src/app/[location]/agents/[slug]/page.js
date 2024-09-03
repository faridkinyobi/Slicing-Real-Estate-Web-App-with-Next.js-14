import BaseLayout from "@/components/Layouts/BaseLayouts";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import PropertyLists from "@/components/Lists/PropertyLists";
export default function AgentsDetailPage() {
  return (
    <BaseLayout theme="dark">
      <div
        className="h-[300px] md:[460px] flex justify-center items-center"
        style={{
          background: "url(/asset/homepage.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="custom-container">
        {/* agents Card info*/}
        <div className="p-5 md:p-10 rounded-xl mt-[-200px] md:mt-[-120px] bg-white space-y-6 shadow-lg">
          {/* top container */}
          <div className="space-y-6 md:flex md:justify-start  md:gap-6 lg:gap-20">
            {/* agents info container */}
            <div className="space-y-4 md:w-3/4 lg:w-[80%] ">
              {/* wreper destop */}
              <div className="md:flex gap-6">
                {/* agen picture destop*/}
                <div className=" md:w-1/2 lg:w-1/5 hidden md:block ">
                  <Image
                    className="md:w-32 md:h-32 rounded-full "
                    src="/asset/agent-1.png"
                    width={520}
                    height={203}
                  />
                </div>
                <div className="space-y-3 md:space-y-6 md:w-full">
                  {/* agents profil end name*/}
                  <div className="flex items-center gap-4">
                    {/* profil */}
                    <Image
                      className="w-12 h-12 md:hidden rounded-full object-cover"
                      src="/asset/agent-1.png"
                      width={53}
                      height={53}
                    />
                    <div>
                      <h1 className="font-bold md:text-2xl">Esther Howard</h1>
                      <p className="text-gray-600 text-sm md:text-base">
                        Member since 2020
                      </p>
                    </div>
                  </div>
                  {/* sosmed */}
                  <div className="flex items-center gap-3 md:gap-6">
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8 object-cover"
                      src="/asset/icons/ic-facebook.svg"
                      width={36}
                      height={36}
                    />
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8 object-cover"
                      src="/asset/icons/ic-twitter.svg"
                      width={36}
                      height={36}
                    />
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8 object-cover"
                      src="/asset/icons/ic-tiktok.svg"
                      width={36}
                      height={36}
                    />
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8 object-cover"
                      src="/asset/icons/ic-instagram.svg"
                      width={36}
                      height={36}
                    />
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8 object-cover"
                      src="/asset/icons/ic-linkedin.svg"
                      width={36}
                      height={36}
                    />
                  </div>
                  {/* agents stats */}
                  <div className="flex flex-col md:flex-row w-full gap-4 md:justify-between">
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Properti</p>
                      <p className="font-bold md:text-xl">89</p>
                    </div>
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Terjual</p>
                      <p className="font-bold md:text-xl">0</p>
                    </div>
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Terjual</p>
                      <p className="font-bold md:text-xl">Rp 29M</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* agent desc */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Deskripsi</p>
                <p className="text-gray-600 text-xs md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Mattis tellus diam
                  duis odio. Fusce convallis egestas pharetra accumsan. Pharetra
                  faucibus urna id dictumst sed id habitant fermentum vel.
                  Sapien turpis porta fermentum neque id eu duis elit mi.
                </p>
              </div>
            </div>
            {/* button */}
            <div className="space-y-2 md:w-1/3 lg:w-1/4 ">
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
        {/* property lists */}
        <div className="mt-12 space-y-6 md:space-y-12">
          <h2 className="font-bold text-lg md:text-2xl">List Iklan</h2>
          <PropertyLists />
        </div>
      </div>
    </BaseLayout>
  );
}
