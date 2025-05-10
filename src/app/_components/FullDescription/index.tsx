"use client";

import { IN_Response } from "@/core/types/interfaces";
import Description from "./Description";
import Attributes from "./Attributes";
import { useState } from "react";
import clsx from "clsx";
import Comments from "./Comments";

function FullDescription({ data }: { data: IN_Response }) {
  const attributes = data.data.attributes;

  const [selectedItem, setSelectedItem] = useState(1);

  const fullDescItems = [
    { id: 1, title: "توضیحات" },
    { id: 2, title: " ویژگی‌های کالا" },
    // { id: 3, title: "نظرات" },
    // { id: 4, title: "کالاهای مشابه" },
  ];

  return (
    <div>
      <div className="w-full h-[72px] flex items-center content-center  justify-center gap-[29px] bg-input-oncard-light rounded-2xl sticky top-0">
        {fullDescItems.map((items) => {
          return (
            <div
              key={items.title}
              className={clsx(
                "w-[104px] h-10 flex items-center content-center justify-center cursor-pointer  text-xs",
                {
                  "bg-gray--900 text-white  rounded-xl font-semibold":
                    items.id === selectedItem,
                }
              )}
              onClick={() => setSelectedItem(items.id)}
            >
              {items.title}
            </div>
          );
        })}
      </div>
      <Description desc={data.data.description} />
      <Attributes attributes={attributes} />
      <Comments />
    </div>
  );
}

export default FullDescription;
