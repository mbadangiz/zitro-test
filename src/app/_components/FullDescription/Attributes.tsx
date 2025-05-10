import Button from "@/core/components/Button";
import TitleTag from "@/core/components/TitleTag";
import { IN_Attribute } from "@/core/types/interfaces";
import { useState } from "react";

function Attributes({ attributes }: { attributes: IN_Attribute[] }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div
      className={`w-full flex flex-col items-center content-center  overflow-hidden     ${
        showMore ? "h-max" : "h-[396px]"
      }`}
    >
      <TitleTag text="ویژگی‌های کالا" />

      <ul
        className={`w-full ${showMore ? "h-max" : "h-[240px]"} overflow-hidden`}
      >
        {attributes[0].attributes.map((items) => {
          const { title, values } = items;
          return (
            <li
              key={title}
              className=" w-full grid grid-cols-12 text-sm py-4 border-2 border-solid border-transparent border-b-primary-line-light"
            >
              <div className="col-span-3 text-seccondary-text-light">
                {title}
              </div>
              <div className="col-span-9 ">
                {values.map((vals, index, main) => {
                  return (
                    <>
                      <span>{vals.title}</span>
                      {index < main.length - 1 && <>/</>}
                    </>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="grow w-full flex items-center content-center justify-center mt-3">
        <Button
          className="!w-[189px] !h-10 bg-transparent border-gray--900 border-2 border-solid !text-gray--900"
          onClick={handleShowMore}
        >
          {showMore ? "بستن" : "نمایش بیشتر"}
        </Button>
      </div>
    </div>
  );
}

export default Attributes;
