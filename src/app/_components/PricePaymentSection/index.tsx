import Button from "@/core/components/Button";
import CustomImage from "@/core/components/customImage";
import { IN_Response } from "@/core/types/interfaces";

export default function PricePaymentSection({ data }: { data: IN_Response }) {
  const verticalInfo = [
    {
      id: 0,
      title: "فروشنده: زیترو",
      startIcon: "/icons/zitro.png",
      extraClasses: "",
      endIcon: "",
    },
    {
      id: 1,
      title: "جهت ثبت درخواست ثبت رجیستری با شماره 02172509 تماس بگیرید.",
      startIcon: "/icons/turn.png",
      extraClasses:
        "!text-blue--500 !bg-blue--100 border-[1px] border-solid border-blue--500",
      endIcon: "",
    },
    {
      id: 2,
      title: "تامین حرفه ای کالای دیجیتال",
      startIcon: "/icons/courthouse.png",
      extraClasses: "",
      endIcon: "",
    },
    {
      id: 3,
      title: "بسته بندی و ارسال کالا",
      startIcon: "/icons/box.png",
      extraClasses: "",
      endIcon: "/icons/arrow.png",
    },
  ];

  const lists = [
    {
      id: 1,
      src: "/icons/Moneysa.png",
    },
    {
      id: 2,
      src: "/icons/Digipay.png",
    },
    {
      id: 3,
      src: "/icons/Jetvam.png",
    },
    {
      id: 4,
      src: "/icons/Blu.png",
    },
  ];

  const {
    data: { properties },
  } = data;

  const price = properties[0].priceProperties[0].price;
  const discount = properties[0].priceProperties[0].discount;

  return (
    <>
      <div className="w-full bg-input-oncard-light border-[1px] border-solid border-primary-line-light  rounded-xl p-4 space-y-4  ">
        <ul className="space-y-1.5 hidden lg:block">
          {verticalInfo.map((items) => {
            const { startIcon, endIcon, extraClasses, id, title } = items;
            return (
              <li
                key={id}
                className={`flex items-center content-center justify-between bg-white rounded-lg h-10 px-4 text-[10px] ${extraClasses}`}
              >
                <div className={`flex items-center content-center gap-x-2`}>
                  <CustomImage
                    src={startIcon}
                    alt={title}
                    parentClasses="size-4"
                  />
                  <p>{title}</p>
                </div>
                {endIcon && (
                  <CustomImage
                    src={endIcon}
                    alt={title}
                    parentClasses="size-4"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="w-full  flex lg:flex-col justify-between">
          <div className="lg:w-full w-max gap-x-2 lg:gap-x-0 flex items-center content-center justify-between">
            <div className="py-1 px-2 bg-red--500 text-white text-xs rounded-lg">
              {((discount / price) * 100).toFixed(0)}%
            </div>
            <div className="flex items-center content-center gap-x-2">
              <p className="font-bold line-through text-red--500">
                {Number(price).toLocaleString()}
              </p>
              <CustomImage
                src="/icons/toman-red.png"
                alt="toman-red"
                parentClasses="size-3"
              />
            </div>
          </div>
          <div className="flex items-center  content-center  justify-end p-2 gap-x-2">
            <p className=" text-2xl lg:text-[32px] font-bold">
              {Number(price - discount).toLocaleString()}
            </p>
            <CustomImage
              src="/icons/toman-icon.png"
              alt="toman"
              parentClasses="size-6"
            />
          </div>
        </div>

        <div className="w-full h-[88px] p-4 flex-col  justify-between bg-white border-2 border-solid border-primary-line-light rounded-2xl text-sm  hidden lg:flex">
          <div className="w-full flex items-center content-center gap-x-2">
            <CustomImage
              src="/icons/SamanInsurance.png"
              alt="SamanInsurance"
              parentClasses="size-6"
            />
            <p className="font-semibold">بیمه تجهیزات دیجیتال - بیمه سامان</p>
          </div>
          <div className="w-full flex items-center content-center justify-end gap-x-2">
            <div className="py-1 px-2 bg-red--500 text-white text-xs rounded-lg">
              10%
            </div>
            <p className="font-bold line-through text-red--500">
              {Number(1000000).toLocaleString()}
            </p>
            <p className="text-base  ">{Number(900000).toLocaleString()}</p>
            <CustomImage
              src="/icons/toman-icon.png"
              alt="toman"
              parentClasses="size-6"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <Button className="!h-12 col-span-1 lg:col-span-2  lg:h-14 order-2 lg:order-1 text-sm  lg:text-base">
            خرید نقدی
          </Button>
          <Button
            className="h-12 col-span-1 lg:col-span-2 order-1 text-sm "
            variant="blue"
            size="medium"
          >
            خرید اقساطی
          </Button>
        </div>
        <div className="flex items-center content-center justify-between">
          {lists.map((item) => (
            <CustomImage
              src={item.src}
              key={item.id}
              alt=""
              parentClasses="size-[58px]"
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-input-oncard-light border-[1px] border-solid border-primary-line-light  rounded-xl p-4 space-y-4  mt-2 hidden  lg:block">
        <div className="w-full h-16 bg-blue--500 rounded-xl"> </div>
        <div className="flex items-center content-center  gap-x-2 cursor-pointer px-4 rounded-xl h-14 bg-selected-orange text-textborder-orange border-[1px] border-solid border-textborder-orange text-xs">
          <CustomImage
            src="/icons/house.png"
            alt="house"
            parentClasses="size-6"
          />
          <p>امکان تحویل حضوری در شعب زیترو</p>
        </div>
      </div>
    </>
  );
}
