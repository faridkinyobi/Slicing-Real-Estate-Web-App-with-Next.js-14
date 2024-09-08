import Image from "next/image";
import { useTranslations } from "use-intl";

export default function ChooseCard({ image, title, description }) {
  const t = useTranslations("WhyChooseUs");
  return (
    <div className="px-3 py-[18px]  md:px-6 md:py-9  border border-gray-200 rounded-[16px] space-y-4">
      <div>
        <Image
          className="w-[68px] mx-auto"
          width={68}
          height={0}
          src={image}
          alt="Choose"
        />
      </div>
      <div className=" text-center space-y-2">
        <h3 className="font-bold text-lg">{t(title)}</h3>
        <p className="text-gray-600">{t(description)}</p>
      </div>
    </div>
  );
}
