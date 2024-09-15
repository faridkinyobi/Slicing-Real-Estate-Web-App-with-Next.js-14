"use client";
import ChooseCard from "@/components/Features/HomePage/ChooseCard";
import BaseLayouts from "@/components/Layouts/BaseLayouts";
import SearchForm from "@/components/UI/SearchForm";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
import { useTranslations } from "next-intl";
import { useRouter,usePathname } from "next/navigation";
import properties from "@/components/Data/properties";
export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("HomePageTop", "WhyChooseUs");
  const tj = useTranslations("HomePageTitel");

  return (
    <BaseLayouts theme="dark" className="">
      <div
        className="h-[550px] md:h-screen flex justify-center items-center"
        style={{
          background: "url(/asset/homepage.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custom-container text-center text-white  space-y-6">
          <div className=" space-y-2 text">
            <h1 className="text-4xl md:text-6xl font-bold leading-relaxed md:max-w-[585px] md:mx-auto md:leading-[1.5]">
              {t("Find Your Dream Home Today")}
            </h1>
            <p className="leading-relaxed md:text-xl">
              {t(
                "Explore our extensive listings end find the perfect property for you"
              )}
            </p>
          </div>
          <SearchForm />
        </div>
      </div>
      <section className="py-12">
        <div className=" custom-container space-y-6 md:space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            {tj("Why Choose Us")}
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* card */}
            <ChooseCard
              image="/asset/icon-1.png"
              title="Property Insurance"
              description="Property Insurance Description"
            />
            <ChooseCard
              image="/asset/icon-2.png"
              title="Best Price"
              description="Best Price Description"
            />
            <ChooseCard
              image="/asset/icon-3.png"
              title="Overall Control"
              description="Overall Control Description"
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className=" custom-container space-y-6 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              {tj("Browse Properties")}
            </h2>
            {/* locations */}
            <div className="flex gap-2 ">
              <button
                className="btn btn-location active"
                onClick={() => router.push(`${pathname}`)}
              >
                Semua Lokasi
              </button>
              <button
                className="btn btn-location"
                onClick={() => router.push(`${pathname}?location=jakarta`)}
              >
                Jakarta
              </button>
              <button
                className="btn btn-location"
                onClick={() => router.push(`${pathname}?location=bali`)}
              >
                Bali
              </button>
              <button
                className="btn btn-location"
                onClick={() => router.push(`${pathname}?location=lombok`)}
              >
                Lombok
              </button>
            </div>
          </div>
          {/* properties */}
          <PropertyLists properties={properties} />
        </div>
      </section>
      <CallToAction
        imge="/asset/image-1.png"
        title="You’ve found a neighbour you love"
      />
    </BaseLayouts>
  );
}
