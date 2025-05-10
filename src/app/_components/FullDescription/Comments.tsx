import Button from "@/core/components/Button";
import CustomImage from "@/core/components/customImage";
import TitleTag from "@/core/components/TitleTag";

function Comments() {
  return (
    <div className="w-full ">
      <TitleTag text="نظرات" />
      <div className="w-full h-[88px] flex items-center content-center justify-between">
        <div className="flex flex-col justify-between h-full">
          <p>چطور می‌توانم در مورد این کالا نظر بدهم؟</p>
          <p className="text-seccondary-text-light text-xs">
            اگر این محصول را از فروشگاه خریداری کرده‌اید و تجربه استفاده از آن
            را دارید، می‌توانید با زدن بر روی دکمه زیر، نظر خود ثبت کنید.
          </p>
        </div>

        <Button
          size="medium"
          className="!bg-gray--900 !text-white grow-0 !w-[163px]"
        >
          ثبت نظر
        </Button>
      </div>
      <div className="w-full py-8 px-6 rounded-2xl border-2 border-solid border-primary-line-light mt-4 divide-y-2 divide-solid divide-primary-line-light">
        <div className="py-6 w-full space-y-4">
          <div className="w-full flex justify-between  items-center content-center">
            <div className="flex items-center content-center gap-x-2">
              <div className="size-12 rounded-full border-2 border-solid border-primary-line-light"></div>
              <p className="min-w-[288px] text-sm p-2">کیارش اسدیان</p>
              <p className="text-seccondary-text-light">۴ آذر ۱۴۰۲</p>
            </div>
            <CustomImage
              src="/icons/stars.png"
              alt="star"
              parentClasses="w-[120px] h-[25px]"
            />
          </div>
          <div className="flex items-center content-center justify-between w-full ">
            <p className="font-semibold">کسانی که آیفون دارن حتما بخرن را</p>
            <div className="!w-[150px] !h-8 !rounded-4xl text-green--500 bg-transparent border-2 border-solid border-green--500 text-[10px] items-center content-center flex justify-center">
              این محصول را توصیه میکنم
            </div>
          </div>

          <div>
            یه هدفون Huawei SE دو تومنی دارم یه دونه ام این کیفیت صدای هواوی
            بهتره. خودتم میدونی داری پول کلاس گذاشتن و میدی. پس بده بره لذتش و
            ببر. این تراشه منجر به حذف نویز فعال و عملکرد دو برابر بهتره این مدل
            نسبت به قبل شده است. همچنین این ویژگی باعث شده تا صدا کیفیت بهتری
            پیدا کند. یکی دیگر از مشخصات
          </div>
        </div>
        <div className="py-6 w-full space-y-4">
          <div className="w-full flex justify-between  items-center content-center">
            <div className="flex items-center content-center gap-x-2">
              <div className="size-12 rounded-full border-2 border-solid border-primary-line-light"></div>
              <p className="min-w-[288px] text-sm p-2">کیارش اسدیان</p>
              <p className="text-seccondary-text-light">۴ آذر ۱۴۰۲</p>
            </div>
            <CustomImage
              src="/icons/stars.png"
              alt="star"
              parentClasses="w-[120px] h-[25px]"
            />
          </div>
          <div className="flex items-center content-center justify-between w-full ">
            <p className="font-semibold">کسانی که آیفون دارن حتما بخرن را</p>
            <div className="!w-[150px] !h-8 !rounded-4xl text-red--500 bg-transparent border-2 border-solid border-red--500 text-[10px] items-center content-center flex justify-center">
              این محصول را توصیه نمیکنم
            </div>
          </div>

          <div>
            یه هدفون Huawei SE دو تومنی دارم یه دونه ام این کیفیت صدای هواوی
            بهتره. خودتم میدونی داری پول کلاس گذاشتن و میدی. پس بده بره لذتش و
            ببر. این تراشه منجر به حذف نویز فعال و عملکرد دو برابر بهتره این مدل
            نسبت به قبل شده است. همچنین این ویژگی باعث شده تا صدا کیفیت بهتری
            پیدا کند. یکی دیگر از مشخصات
          </div>
        </div>
      </div>
      <div className="  w-max mx-auto flex items-center content-center justify-center mt-5">
        <Button className=" !w-auto  !h-10 bg-transparent border-gray--900 border-2 border-solid !text-gray--900 !text-xs">
          مشاهده همه نظرها
        </Button>
      </div>
    </div>
  );
}

export default Comments;
