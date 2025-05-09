import { getData } from "@/core/services/getData";
import Breadcrumb from "./_components/Breadcrumb";
import ProductSection from "./_components/ProductSection";
import PricePaymentSection from "./_components/PricePaymentSection";

export default async function Home() {
  const data = await getData();

  return (
    <div className="customContainer">
      <Breadcrumb />
      <div className="w-full grid grid-cols-12 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-9 py-6">
          <ProductSection data={data} />
        </div>
        <div className="fixed lg:static w-full bottom-0 left-0 lg:col-span-3 ">
          <PricePaymentSection />
        </div>
      </div>
    </div>
  );
}
{
  /* <div dangerouslySetInnerHTML={{ __html: data.data.description }} /> */
}
