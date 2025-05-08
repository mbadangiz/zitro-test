import CustomImage from "@/core/components/customImage";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

function Nav() {
  return (
    <div className="w-full border-transparent border-[1px] border-solid border-b-primary-line-light">
      <nav className="customContainer ">
        <NavTopSection />
        <NavBottomSection />
      </nav>
    </div>
  );
}

function NavTopSection() {
  return (
    <div className="w-full h-[60px] lg:h-24 flex items-center content-center justify-between">
      <div className="relative w-[121px] h-10">
        <Image src="/images/logo.png" alt="logo" fill />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="جست و جو"
          className="h-12 w-[574px] bg-input-oncard-light border-[1px] border-primary-line-light border-solid rounded-xl pr-4 pl-12 placeholder:opacity-100 placeholder:text-gray--800"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <CustomImage
            src="/icons/search-normal.png"
            alt="search-icon"
            parentClasses="size-4"
          />
        </div>
      </div>

      <div className="flex gap-x-8">
        <CustomImage
          src="/icons/notification.png"
          alt="notification-icon"
          parentClasses="size-6 cursor-pointer"
        />
        <CustomImage
          src="/icons/user.png"
          alt="user-icon"
          parentClasses="size-6 cursor-pointer"
        />
        <CustomImage
          src="/icons/cart.png"
          alt="cart-icon"
          parentClasses="size-6 cursor-pointer"
        />
      </div>
    </div>
  );
}

function NavBottomSection() {
  const bottomMenuList = [
    {
      id: 0,
      title: "دسته بندی کالا",
      icon: "/icons/category.png",
      extraClasses: "",
    },
    {
      id: 1,
      title: "زیترو آف",
      icon: "/icons/zitro-off.png",
      extraClasses: "!bg-red--500-20",
    },
    {
      id: 2,
      title: "مجله آنلاین زیترو",
      icon: "/icons/book.png",
      extraClasses: "",
    },
    {
      id: 3,
      title: "درخواست تسهیلات",
      icon: "/icons/receipt-edit.png",
      extraClasses: "",
    },
    {
      id: 4,
      title: "درخواست نمایندگی",
      icon: "/icons/shop-add.png",
      extraClasses: "",
    },
  ];

  return (
    <div className="w-full h-16 hidden items-center content-center lg:flex gap-x-6">
      {bottomMenuList.map((items) => {
        const { icon, extraClasses, id, title } = items;
        return (
          <Fragment key={id}>
            <Link
              href={""}
              className={clsx(
                extraClasses,
                "h-8 px-4 flex items-center content-center gap-x-2 rounded-lg "
              )}
            >
              <CustomImage src={icon} alt={title} parentClasses="size-4" />
              <p className="text-xs leading-4">{title}</p>
            </Link>
            {id === 0 && <div className="verticalLine h-8"></div>}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Nav;
