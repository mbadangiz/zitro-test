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
      <h2 className=" text-base lg:text-2xl font-medium leading-8 lg:leading-10 ">
        {title}
      </h2>
      <p className="text-xs lg:text-start text-end lg:my-1 text-seccondary-text-light my-2">
        {code}
      </p>
      <div className="w-full flex items-center content-center justify-between mt-2 lg:mt-0">
        <div className="lg:flex items-center content-center gap-x-[18px] hidden">
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
            "flex items-center content-center h-8 text-xs text-white rounded-lg px-2 gap-x-2",
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
                parentClasses="size-4 hidden lg:block"
              />
              <p>کالای غیر اصل</p>
            </>
          ) : (
            <>
              <CustomImage
                src="/icons/verify.png"
                alt="verify-icon"
                parentClasses="size-4 hidden lg:block"
              />
              <p>کالای اصل</p>
            </>
          )}
        </div>
        <div className="lg:hidden bg-primary-line-light rounded-lg text-xs p-2">
          3.5 امتیاز
        </div>
        <div className="lg:hidden rounded-lg text-xs p-2 text-button-blue bg-blue--100">
          بدون نظر
        </div>
      </div>
    </div>
  );
}
