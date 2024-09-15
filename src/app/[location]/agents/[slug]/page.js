import BaseLayout from "@/components/Layouts/BaseLayouts";
import Image from "next/image";
import { HiOutlineMail} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import PropertyLists from "@/components/Lists/PropertyLists";
import agents from "@/components/Data/agents";
import Link from "next/link";
import SosmedItem from "@/components/Features/Agents/SosmedItem";
export default function AgentsDetailPage({ params }) {
  const { slug } = params;
  const dataAgents = agents.find((list) => list.slug === slug);
  
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
                    className="md:w-32 md:h-32 rounded-full object-cover"
                    src={dataAgents?.profile_picture}
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
                      src={dataAgents.profile_picture}
                      width={53}
                      height={53}
                    />
                    <div>
                      <h1 className="font-bold md:text-2xl">
                        {dataAgents.name}
                      </h1>
                      <p className="text-gray-600 text-sm md:text-base">
                        Member since {dataAgents.joined_date.split("/").pop()}
                      </p>
                    </div>
                  </div>
                  {/* sosmed */}
                  <div className="flex items-center gap-3 md:gap-6">
                    <SosmedItem
                      url={dataAgents?.sosial_media_links?.facebook}
                      icon="/asset/icons/ic-facebook.svg"
                    />
                    <SosmedItem
                      url={dataAgents?.sosial_media_links?.twitter}
                      icon="/asset/icons/ic-twitter.svg"
                    />
                    <SosmedItem
                      url={dataAgents?.sosial_media_links?.tiktok}
                      icon="/asset/icons/ic-tiktok.svg"
                    />
                    <SosmedItem
                      url={dataAgents?.sosial_media_links?.instagram}
                      icon="/asset/icons/ic-instagram.svg"
                    />
                    <SosmedItem
                      url={dataAgents?.sosial_media_links?.linkedin}
                      icon="/asset/icons/ic-linkedin.svg"
                    />
                  </div>
                  {/* agents stats */}
                  <div className="flex flex-col md:flex-row w-full gap-4 md:justify-between">
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Properti</p>
                      <p className="font-bold md:text-xl">
                        {dataAgents.total_property}
                      </p>
                    </div>
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Terjual</p>
                      <p className="font-bold md:text-xl">
                        {dataAgents.total_sold_property}
                      </p>
                    </div>
                    <div className="text-center flex justify-between items-center md:flex-col">
                      <p className="text-sm">Total Terjual</p>
                      <p className="font-bold md:text-xl">
                        Rp {dataAgents.price_renge_property}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* agent desc */}
              <div className="space-y-2">
                <p className="font-semibold text-sm">Deskripsi</p>
                <p className="text-gray-600 text-xs md:text-base">
                  {dataAgents.description}
                </p>
              </div>
            </div>
            {/* button kontak */}
            <div className="space-y-2 md:w-1/3 lg:w-1/4 ">
              <Link
                href={`//wa.me/${dataAgents.phone}`}
                className="btn btn-success text-white btn-block"
              >
                <FaWhatsapp className="text-xl md:text-2xl" />
                Contact Agent
              </Link>
              <button className="btn btn-outline btn-block">
                <HiOutlineMail className="text-xl md:text-2xl" /> Send an Email
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
