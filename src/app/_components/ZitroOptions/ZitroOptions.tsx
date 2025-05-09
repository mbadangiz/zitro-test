import CustomImage from "@/core/components/customImage";

function ZitroOptions() {
  const data = [
    { title: "خرید حضوری", src: "/images/ZitroOptions.png" },
    { title: "پشتیبانی 10:30 تا 17", src: "/images/ZitroOptions5.png" },
    { title: "تضمین اصالت کالا", src: "/images/ZitroOptions4.png" },
    { title: "ارسال فوری در تهران", src: "/images/ZitroOptions3.png" },
    { title: "تامین حرفه‌ای کالا", src: "/images/ZitroOptions2.png" },
  ];
  return (
    <div className="w-full flex justify-between items-center content-center mt-10">
      {data.map((items) => {
        return (
          <div
            key={items.src}
            className="flex flex-col items-center content-center gap-2"
          >
            <CustomImage
              src={items.src}
              parentClasses="w-[45px] h-[38px]"
              alt={items.title}
            />
            <p className="text-seccondary-text-light text-sx">{items.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ZitroOptions;
