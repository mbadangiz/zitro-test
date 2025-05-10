import Button from "@/core/components/Button";
import CustomImage from "@/core/components/customImage";
import TitleTag from "@/core/components/TitleTag";

function Comments() {
  return (
    <div className="w-full px-4 md:px-0">
      <TitleTag text="نظرات" />

      {/* Top prompt section */}
      <div className="w-full h-auto flex flex-col md:flex-row md:h-[88px] items-start md:items-center justify-between gap-4 md:gap-0 mt-4">
        <div className="flex flex-col justify-between h-full space-y-2">
          <p className="text-sm">چطور می‌توانم در مورد این کالا نظر بدهم؟</p>
          <p className="text-seccondary-text-light text-xs">
            اگر این محصول را از فروشگاه خریداری کرده‌اید و تجربه استفاده از آن
            را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.
          </p>
        </div>

        <Button
          size="medium"
          className="!bg-gray--900 !text-white !w-full md:!w-[163px]"
        >
          ثبت نظر
        </Button>
      </div>

      {/* Comments List */}
      <div className="w-full py-8 px-4 md:px-6 rounded-2xl border-2 border-solid border-primary-line-light mt-6 divide-y-2 divide-solid divide-primary-line-light">
        {[true, false].map((isRecommended, index) => (
          <div key={index} className="py-6 w-full space-y-4">
            {/* Header */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-x-2">
                <div className="size-12 rounded-full border-2 border-solid border-primary-line-light"></div>
                <p className="text-sm p-2 whitespace-nowrap">کیارش اسدیان</p>
                <p className="text-seccondary-text-light text-xs whitespace-nowrap">
                  ۴ آذر ۱۴۰۲
                </p>
              </div>
              <CustomImage
                src="/icons/stars.png"
                alt="star"
                parentClasses="w-[120px] h-[25px]"
              />
            </div>

            {/* Title and Recommendation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
              <p className="font-semibold text-sm">
                کسانی که آیفون دارن حتما بخرن را
              </p>
              <div
                className={`!w-full sm:!w-[150px] !h-8 !rounded-4xl text-[10px] items-center flex justify-center border-2 border-solid
                  ${
                    isRecommended
                      ? "text-green--500 border-green--500"
                      : "text-red--500 border-red--500"
                  }
                `}
              >
                {isRecommended
                  ? "این محصول را توصیه میکنم"
                  : "این محصول را توصیه نمیکنم"}
              </div>
            </div>

            {/* Body */}
            <div className="text-sm leading-6">
              یه هدفون Huawei SE دو تومنی دارم یه دونه ام این کیفیت صدای هواوی
              بهتره. خودتم میدونی داری پول کلاس گذاشتن و میدی. پس بده بره لذتش و
              ببر. این تراشه منجر به حذف نویز فعال و عملکرد دو برابر بهتره این
              مدل نسبت به قبل شده است. همچنین این ویژگی باعث شده تا صدا کیفیت
              بهتری پیدا کند. یکی دیگر از مشخصات
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="w-full flex justify-center mt-6">
        <Button className="!w-auto !h-10 bg-transparent border-gray--900 border-2 border-solid !text-gray--900 !text-xs">
          مشاهده همه نظرها
        </Button>
      </div>
    </div>
  );
}

export default Comments;
