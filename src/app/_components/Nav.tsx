import CustomImage from "@/core/components/customImage";
import Image from "next/image";

function Nav() {
  return (
    <div className="w-full border-transparent border-[1px] border-solid   border-b-primary-line-light">
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
  return (
    <div className="w-full h-16 hidden items-center content-center lg:flex"></div>
  );
}

export default Nav;
