import CustomImage from "@/core/components/customImage";
import { IN_Insurance } from "@/core/types/interfaces";

export async function ProductSectionInsurance({
  data,
}: {
  data: IN_Insurance[];
}) {
  return (
    <div>
      <h3 className="text-sm py-2 mb-4">بیمه :</h3>
      <ul>
        {data.map((items) => {
          const { imageUrl, title, price, id, Code } = items;
          return (
            <li
              key={id}
              className="flex gap-x-2 p-4 w-full bg-input-oncard-light border-[1px] border-solid border-gray--100 h-20  rounded-2xl"
            >
              <input
                type="radio"
                name="insurance"
                id={`${Code}-${id}-${title}`}
                className="size-6"
              />
              <label
                htmlFor={`${Code}-${id}-${title}`}
                className="grow-[1] grid grid-cols-12 cursor-pointer  gap-x-2"
              >
                <div className="col-span-8 h-full flex gap-x-2">
                  <CustomImage
                    src={imageUrl}
                    alt={title}
                    parentClasses="size-7"
                  />
                  <div className=" flex flex-col justify-between text-xs">
                    <p>{title}</p>
                    <p className="text-orange--500">شرایط و توضیحات</p>
                  </div>
                </div>
                <div className="col-span-4 h-full  flex  justify-end  items-center">
                  <p className="text-base font-bold">
                    {Number(price).toLocaleString()}
                  </p>
                  <CustomImage
                    src="/icons/toman-icon.png"
                    alt="toman"
                    parentClasses="size-4"
                  />
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
