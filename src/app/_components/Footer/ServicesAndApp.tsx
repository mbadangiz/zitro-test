import Link from "next/link";

function ServicesAndAdress() {
  const data = {
    store: {
      title: "فروشگاه",
      data: [
        "گوشی موبایل",
        "تبلت",
        "کنسول بازی",
        "لوازم جانبی",
        "لپ تاپ",
        "لوازم کامپیوتر",
      ],
    },
    guide: {
      title: "راهنما",
      data: [
        "سوالات متداول",
        "روش‌های حمل و ارسال",
        "راهنمای خرید",
        "راهنمای بازگشت وجه",
        "راهنمای خرید اقساطی",
      ],
    },
    zitro: {
      title: "زیترو",
      data: ["تماس با ما", "درباره زیترو", "حریم خصوصی", "بلاگ"],
    },
    customerServices: {
      title: "خدمات  مشتریان",
      data: ["حریم خصوصی", "قوانین و شرایط", "شرایط گارانتی"],
    },
    loans: {
      title: "درخواست تسهیلات",
      data: ["وام زیترو", "وام ویژه بازنشستگان", "درخواست نمایندگی"],
    },
  } as const;

  type DataKey = keyof typeof data;

  const keysOfData = Object.keys(data) as DataKey[];

  const addressData = [
    "فروشگاه: خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی یک، غرفه A62",
    "شماره تلفن : 02172509",
    "خدمات پس از فروش: خیابان جمهوری، تقاطع حافظ، پاساژ چارسو، طبقه منفی یک، پلاک A33",
    "کد پستی : 1516745402     ایمیل : info@zitro.ir",
  ];

  return (
    <>
      <div className="col-span-6 grid grid-cols-5 gap-[21px]">
        {keysOfData.map((key) => {
          const section = data[key];
          return (
            <div key={key} className="col-span-1 space-y-6">
              <h3 className="font-bold"> {section.title}</h3>
              <ul className="space-y-6">
                {section.data.map((items, index) => {
                  return (
                    <li key={index} className="text-sm font-light">
                      <Link href={"/" + items}> {items}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 px-6 space-y-6">
        <h3 className="font-bold"> آدرس:</h3>
        <ul className="space-y-6">
          {addressData.map((items, index) => {
            return (
              <li key={index} className="text-sm font-light">
                <Link href={"/" + items}> {items}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ServicesAndAdress;
