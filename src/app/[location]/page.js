import Image from "next/image";
import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import ChooseCard from "@/components/Features/HomePage/ChooseCard";
import PropertyCard from "@/components/UI/PropertyCard";
import BaseLayouts from "@/components/Layouts/BaseLayouts";
import SearchForm from "@/components/UI/SearchForm";
import PropertyLists from "@/components/Lists/PropertyLists";
import CallToAction from "@/components/UI/CallToAction";
export default function page() {
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
              Find Your Dream Home Today
            </h1>
            <p className="leading-relaxed md:text-xl">
              Explore our extensive listings end find the perfect property for
              you
            </p>
          </div>
          <SearchForm />
        </div>
      </div>
      <section className="py-12">
        <div className=" custom-container space-y-6 md:space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Why Choose Us
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* card */}
            <ChooseCard
              image="/asset/icon-1.png"
              title="Property Insurance"
              description="We offer our customer property protection of liability coverage and insurance for their better life."
            />
            <ChooseCard
              image="/asset/icon-2.png"
              title="Best Price"
              description="Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you."
            />
            <ChooseCard
              image="/asset/icon-3.png"
              title="Overall Control"
              description="Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control."
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className=" custom-container space-y-6 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              Browse Properties
            </h2>
            {/* locations */}
            <div className="flex gap-2 ">
              <button className="btn btn-location active">Semua Lokasi</button>
              <button className="btn btn-location">Jakarta</button>
              <button className="btn btn-location">Surabaya</button>
              <button className="btn btn-location">Malang</button>
            </div>
          </div>
          {/* properties */}
          <PropertyLists />
        </div>
      </section>
      <CallToAction />
    </BaseLayouts>
  );
}
