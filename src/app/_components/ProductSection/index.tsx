import { IN_Response } from "@/core/types/interfaces";
import { ProductSectionColors } from "./ProductSectionColors";
import { ProductSectionGuarantee } from "./ProductSectionGuarantee";
import { ProductSectionHeader } from "./ProductSectionHeader";
import { ProductSectionInsurance } from "./ProductSectionInsurance";
import ProductSectionAttribsSummary from "./ProductSectionAttribsSummary";
import ImageGallery from "./ImageGallery";

function ProductSection({ data }: { data: IN_Response }) {
  const {
    data: {
      title,
      code,
      brandName,
      isFake,
      attributes,
      insurances,
      productImages,
    },
  } = data;

  const colorItems = attributes.flatMap((group) =>
    group.attributes.filter((attr) => attr.name === "colors")
  );

  const attribSummary = attributes[0].attributes
    .filter((item) => item.values.length === 1)
    .slice(0, 6);

  return (
    <div className="grid grid-cols-12 lg:gap-x-6">
      <div className="col-span-12 lg:col-span-5">
        <ImageGallery images={productImages} />
      </div>
      <div className="col-span-12 lg:col-span-7 space-y-4 px-4 ">
        <ProductSectionHeader
          title={title}
          code={code}
          brandName={brandName}
          isFake={isFake}
        />
        <ProductSectionColors colors={colorItems[0].values} />
        <div className="lg:hidden horizantalLine"></div>
        <ProductSectionGuarantee />
        <div className="lg:hidden horizantalLine"></div>
        <ProductSectionInsurance data={insurances} />
        <div className="lg:hidden horizantalLine"></div>
        <ProductSectionAttribsSummary data={attribSummary} />
        <p className="py-2 text-xs leading-6 text-justify hidden lg:block text-primary-text-light">
          درخواست بازگشت کالا در دسته نمایشگر (موبایل) در فروشگاه آی‌تی هوم تنها
          با دلیل "انصراف از خرید" و در صورتی پذیرفته می‌شود که کالا در شرایط
          اولیه خود باشد (در صورت پلمپ بودن، نباید باز شده باشد). مانیتور با
          تعداد بالای 3 پیکسل سوخته فقط شامل ضمانت بازگشت می‌شود.
        </p>
      </div>
    </div>
  );
}

export default ProductSection;
