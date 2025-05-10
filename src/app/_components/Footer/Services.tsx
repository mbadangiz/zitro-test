import CustomImage from "@/core/components/customImage";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: "خرید اقساطی",
      icon: "/icons/rent.svg",
    },
    {
      id: 2,
      title: "پشتیبانی",
      icon: "/icons/life-buoy-01.svg",
    },
    {
      id: 3,
      title: "شرایط گارانتی",
      icon: "/icons/shield-zap.svg",
    },
    {
      id: 4,
      title: "روش‌های پرداخت",
      icon: "/icons/moneys.svg",
    },
    {
      id: 5,
      title: "روش‌های ارسال",
      icon: "/icons/delivery.svg",
    },
    {
      id: 6,
      title: "بازگشت کالا",
      icon: "/icons/convert-3d-cube.png",
    },
  ];
  return (
    <div className="w-full h-[170px] bg-white flex items-center content-center justify-evenly rounded-4xl">
      {servicesList.map((items) => {
        return (
          <div className="space-y-[21px]" key={items.id}>
            <CustomImage
              src={items.icon}
              alt="icons"
              parentClasses="size-8 mx-auto"
            />
            <p className="text-lg">{items.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
