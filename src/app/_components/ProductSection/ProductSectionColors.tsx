import { IN_AttributeValue } from "@/core/types/interfaces";
import clsx from "clsx";

export function ProductSectionColors({
  colors,
}: {
  colors: IN_AttributeValue[];
}) {
  const selectedColor = "#000000";
  return (
    <div>
      <h3 className="text-sm py-2">رنگ:</h3>
      <ul className="mt-4 flex items-center content-center gap-4 lg:gap-6 flex-wrap">
        {colors.map((items) => {
          const { value, title } = items;
          return (
            <li
              key={value}
              className={clsx(
                "flex items-center content-center  gap-x-2 cursor-pointer px-2 rounded-xl h-10 border-[1px] border-solid border-primary-line-light lg:border-0",
                {
                  "lg:!bg-selected-orange lg:!text-textborder-orange lg:!border-[1px] lg:!border-solid lg:!border-textborder-orange":
                    selectedColor === value,
                  " bg-gray--900 text-white !border-0  ":
                    selectedColor === value,
                }
              )}
            >
              <div
                className="size-6 rounded-lg"
                style={{ backgroundColor: value }}
              ></div>
              <p className="text-xs">{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
