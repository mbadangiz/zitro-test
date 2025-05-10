import { getData } from "@/core/services/getData";
import Breadcrumb from "./_components/Breadcrumb";
import ProductSection from "./_components/ProductSection";
import PricePaymentSection from "./_components/PricePaymentSection";
import { IN_Response } from "@/core/types/interfaces";
import ZitroOptions from "./_components/ZitroOptions/ZitroOptions";
import FullDescription from "./_components/FullDescription";
import SimilarProducts from "./_components/SimilarProducts";

export default async function Home() {
  const res = await getData();

  const data: IN_Response = JSON.parse(JSON.stringify(res));

  const sortedByMinPrice = data.data.properties.sort((a, b) => {
    const priceA = a.priceProperties[0]?.price ?? Infinity;
    const priceB = b.priceProperties[0]?.price ?? Infinity;
    return priceA - priceB;
  });

  data.data.properties = sortedByMinPrice;

  return (
    <div className="customContainer">
      <Breadcrumb />
      <div className="w-full grid grid-cols-12 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-9 py-6">
          <ProductSection data={data} />

          <ZitroOptions />
          <FullDescription data={data} />
        </div>
        <div className="fixed lg:static w-full bottom-0 left-0 lg:col-span-3  !z-50 ">
          <PricePaymentSection data={data} />
        </div>
      </div>
      <SimilarProducts similar={data.data.upCell} />
    </div>
  );
}
