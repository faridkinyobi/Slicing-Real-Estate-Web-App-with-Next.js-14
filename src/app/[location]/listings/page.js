
import dynamic from 'next/dynamic';
const FIlter = dynamic(() => import('@/components/Features/Listings/FIlter'), { ssr: false })
const SearchForm = dynamic(() => import('@/components/UI/SearchForm'), { ssr: false })
import BaseLayouts from "@/components/Layouts/BaseLayouts";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import { useTranslations } from "next-intl";
import properties from "@/components/Data/properties";
export default function ListingsPage() {
  const t = useTranslations("listings")
  return (
    <BaseLayouts>
      <section className="custom-container space-y-6">
        <div className="space-y-5 md:flex md:justify-between md:items-center md:space-y-0 ">
          <h1 className="font-bold text-xl">{t("Browse Properties")}</h1>
          <SearchForm
            WrapperClassName="md:ml-auto md:mr-0 md:w-[400px]"
            inputClaname="border border-gray-300"
            btnClaname="bg-[#C8E4ff] text-primary border border-[#C8E4ff]"
          />
        </div>
        {/* filter */}
        <FIlter />
        <hr />
        <PropertyLists properties={properties} />
        <CallToAction
          imge="/asset/image-2.png"
          title="Tired of looking ? Contact us for Recommendation"
        />
      </section>
    </BaseLayouts>
  );
}
