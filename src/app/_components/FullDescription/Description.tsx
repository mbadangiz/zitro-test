import Button from "@/core/components/Button";
import TitleTag from "@/core/components/TitleTag";
import { useState } from "react";

function Description({ desc }: { desc: string }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div
      className={`w-full flex flex-col items-center content-center ${
        showMore ? "h-max" : "h-[396px]"
      } overflow-hidden `}
    >
      <TitleTag text="توضیحات" />
      <div
        className={`${showMore ? "h-max" : "h-[260px] overflow-hidden"}`}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div className="grow w-full flex items-center content-center justify-center">
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

export default Description;
