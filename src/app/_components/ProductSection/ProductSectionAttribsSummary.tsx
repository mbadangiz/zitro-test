import CustomImage from "@/core/components/customImage";
import { IN_AttributeDetail } from "@/core/types/interfaces";

function ProductSectionAttribsSummary({
  data,
}: {
  data: IN_AttributeDetail[];
}) {
  return (
    <div className="flex flex-col ">
      <ul className="w-full flex lg:grid grid-cols-12 gap-x-4 gap-y-2 overflow-x-auto  py-4 lg:py-0  order-2">
        {data.map((item) => {
          const { title, imageUrl, values } = item;
          const { title: valTitle } = values[0];

          return (
            <div
              key={imageUrl}
              className="lg:bg-input-oncard-light border-[1px] border-solid border-gray--100 p-3 h-[68px] shrink-0   lg:col-span-4 rounded-xl flex flex-col justify-between text-[10px] "
            >
              <div className="flex items-center content-center gap-x-2">
                <CustomImage
                  src={imageUrl}
                  alt={title}
                  parentClasses="size-4 hidden lg:block"
                />
                <span className="opacity-70"> {title}</span>
              </div>
              <p className="font-bold">{valTitle}</p>
            </div>
          );
        })}
      </ul>
      <div className="order-1 lg:order-2 flex justify-between items-center content-center lg:justify-center">
        <p className="text-sm lg:hidden font-semibold"> ویژگی‌های کالا</p>
        <div className="text-blue--500 flex justify-center items-center content-center py-2  text-xs gap-4 ">
          <p>نمایش تمام ویژگی‌ها</p>
          <CustomImage
            src="/icons/arrow-left-blue.png"
            parentClasses="size-2 hidden lg:block"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSectionAttribsSummary;
