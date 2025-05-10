import CustomImage from "@/core/components/customImage";

function AboutZitro() {
  const items = [
    "/images/9043.png",
    "/images/9153.png",
    "/images/9815.png",
    "/images/9994.png",
    "/images/11260.png",
  ];

  const socials = [
    "/icons/TelegramLogomark.png",
    "/icons/InstagramLogomark.png",
    "/icons/WhatsappLogomark.png",
  ];

  return (
    <div className="col-span-3 pr-3 py-3 pl-[30px] space-y-[26px]">
      <div className="w-full">
        <CustomImage
          src="/images/footer-Logo.png"
          alt="footer-Logo"
          parentClasses="w-[215px] h-[86px] mx-auto"
        />
        <p className="mt-2.5 text-sm text-center">
          فروشگاه اینترنتی زیترو فروش کالای دیجیتال و لوازم خانگی
        </p>
      </div>
      <div className="flex items-center content-center justify-between">
        {items.map((src, index) => {
          return (
            <CustomImage
              src={src}
              alt={src}
              key={index}
              parentClasses="size-[53px]"
            />
          );
        })}
      </div>
      <div className="flex items-center content-center justify-center gap-7">
        {socials.map((src, index) => {
          return (
            <CustomImage
              src={src}
              alt={src}
              key={index}
              parentClasses="size-[22.5px]"
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutZitro;
