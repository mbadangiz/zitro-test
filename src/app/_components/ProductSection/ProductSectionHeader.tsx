import CustomImage from "@/core/components/customImage";
import clsx from "clsx";

export function ProductSectionHeader({
  brandName,
  code,
  isFake,
  title,
}: {
  title: string;
  code: string;
  brandName: string;
  isFake: boolean;
}) {
  return (
    <div className="w-full py-4">
      <h2 className="text-2xl font-medium leading-10"> {title}</h2>
      <p className="text-xs my-1 text-seccondary-text-light">{code}</p>
      <div className="w-full flex items-center content-center justify-between">
        <div className="flex items-center content-center gap-x-[18px]">
          <p className="text-sm">
            <span>برند: </span>
            <span className="text-blue--500">{brandName}</span>
          </p>
          <p className="text-sm">
            <span>نظرات: </span>
            <span className="text-blue--500">بدون نظر</span>
          </p>
          <div className="flex items-center content-center gap-x-2 ">
            <CustomImage
              src="/icons/star.png"
              alt="star-icon"
              parentClasses="size-4"
            />
            <p className="text-sx">3.4 از 3 رای</p>
          </div>
        </div>
        <div
          className={clsx(
            "flex items-center content-center h-8 text-xs text-white rounded-lg px-2 font-semibold gap-x-2",
            {
              "bg-red--500": isFake === true,
              "bg-green--500": isFake === false,
            }
          )}
        >
          {isFake ? (
            <>
              <CustomImage
                src="/icons/fake.png"
                alt="verify-icon"
                parentClasses="size-4"
              />
              <p>کالای غیر اصل</p>
            </>
          ) : (
            <>
              <CustomImage
                src="/icons/verify.png"
                alt="verify-icon"
                parentClasses="size-4"
              />
              <p>کالای اصل</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
