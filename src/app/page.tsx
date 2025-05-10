import { IN_Response } from "@/core/types/interfaces";
import res from "./../../public/product.json";
import Breadcrumb from "./_components/Breadcrumb";
import FullDescription from "./_components/FullDescription";
import PricePaymentSection from "./_components/PricePaymentSection";
import ProductSection from "./_components/ProductSection";
import SimilarProducts from "./_components/SimilarProducts";
import ZitroOptions from "./_components/ZitroOptions/ZitroOptions";

export default async function Home() {
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
