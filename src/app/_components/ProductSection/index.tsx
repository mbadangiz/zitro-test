import { IN_Response } from "@/core/types/interfaces";
import { ProductSectionColors } from "./ProductSectionColors";
import { ProductSectionGuarantee } from "./ProductSectionGuarantee";
import { ProductSectionHeader } from "./ProductSectionHeader";
import { ProductSectionInsurance } from "./ProductSectionInsurance";

function ProductSection({ data }: { data: IN_Response }) {
  const {
    data: { title, code, brandName, isFake, attributes, insurances },
  } = data;

  const colorItems = attributes.flatMap((group) =>
    group.attributes.filter((attr) => attr.name === "colors")
  );

  return (
    <div className="grid grid-cols-12 lg:gap-x-6">
      <div className="col-span-5">1</div>
      <div className="col-span-7 space-y-4 px-4 ">
        <ProductSectionHeader
          title={title}
          code={code}
          brandName={brandName}
          isFake={isFake}
        />
        <ProductSectionColors colors={colorItems[0].values} />
        <ProductSectionGuarantee />
        <ProductSectionInsurance data={insurances} />
      </div>
    </div>
  );
}

export default ProductSection;
