import AgentsCard from "@/components/Features/Agents/AgentsCard";
import AgentsLists from "@/components/Features/Agents/AgentsLists";
import BaseLayout from "@/components/Layouts/BaseLayouts";
import CallToAction from "@/components/UI/CallToAction";
import SearchForm from "@/components/UI/SearchForm";

export default function AgentsPage() {
  return (
    <BaseLayout theme="dark">
      <div
        className="h-[500px] md:[550px] flex justify-center items-center"
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
              Our Agent
            </h1>
            <p className="leading-relaxed md:text-xl">
              Explore our extensive listings and find the perfect property for
              you
            </p>
          </div>
          <SearchForm placeholder="Search Agent Name..." />
        </div>
      </div>
      <section className="custom-container py-6 space-y-6 md:space-y-12 md:py-12">
        <h2 className="font-bold text-xl md:text-2xl">Browse Agents</h2>
        {/* agents list */}
        <AgentsLists />
        <CallToAction
          imge="/asset/image-2.png"
          title="Tired of looking ? Contact us for Recommendation"
        />
      </section>
    </BaseLayout>
  );
}
