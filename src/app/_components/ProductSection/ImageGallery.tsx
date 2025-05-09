import CustomImage from "@/core/components/customImage";
import { IN_ProductImage } from "@/core/types/interfaces";
import ImageCarousel from "./ImageCarousel";

async function ImageGallery({
  images,
  selectedImage,
}: {
  images: IN_ProductImage[];
  selectedImage: string;
}) {
  return (
    <div className="w-full flex flex-col  gap-4 items-center content-center">
      <ImageCarousel images={images} />
      <div className="w-full h-12 flex items-center content-center lg:justify-between justify-end  gap-x-6  ">
        <CustomImage
          src="/icons/Compare.png"
          alt="Compare"
          parentClasses="size-6 lg:size-4"
        />
        <CustomImage
          src="/icons/share.png"
          alt="share"
          parentClasses="size-6 lg:size-4"
        />
        <CustomImage
          src="/icons/like.png"
          alt="like"
          parentClasses="size-6 lg:size-4"
        />
      </div>
      <div className="hidden lg:block">
        <CustomImage
          src={selectedImage}
          alt=""
          parentClasses="w-[250px] h-[319px]"
          imageClasses="object-center object-cover"
        />
      </div>
      <ul className="w-full  hidden lg:flex items-center content-center justify-between">
        {images.map((items, index) => {
          const { id, imageUrl } = items;
          if (index > 1 && index < 5) {
            return (
              <li
                key={id}
                className="size-[88px] border-[1px] border-primary-line-light border-solid rounded-xl cursor-pointer"
              >
                <CustomImage
                  src={imageUrl}
                  alt="id"
                  parentClasses="size-full"
                  imageClasses="object-center object-cover rounded-xl"
                />
              </li>
            );
          }
        })}
        <li className="size-[88px] border-[1px] border-primary-line-light border-solid rounded-xl flex items-center content-center justify-center  cursor-pointer">
          <CustomImage
            src={"/icons/more.png"}
            alt="id"
            parentClasses="size-6"
          />
        </li>
      </ul>
    </div>
  );
}

export default ImageGallery;
