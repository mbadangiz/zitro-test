import CustomImage from "@/core/components/customImage";
import TitleTag from "@/core/components/TitleTag";
import { IN_UpCell } from "@/core/types/interfaces";

function SimilarProducts({ similar }: { similar: IN_UpCell[] }) {
  return (
    <div className="w-full">
      <TitleTag text="محصولات مشابه" />
      <div className="-mt-5 overflow-x-auto flex items-center content-center gap-x-2">
        {similar.map((items) => {
          return (
            <div
              className="w-[243px] grid grid-cols-2 gap-2 p-2 rounded-2xl border-2 border-solid border-primary-line-light shrink-0 "
              key={items.id}
            >
              <div className="col-span-1 space-y-1.5">
                <CustomImage
                  src={items.imageUrl}
                  alt={items.title}
                  parentClasses="size-[82px] border-2 border-solid border-primary-line-light rounded-xl "
                  imageClasses="object-cover object-center rounded-xl"
                />
                <div className="w-full flex gap-2">
                  {items.colors.map((items, index) => {
                    if (index < 5)
                      return (
                        <div
                          className="size-3 rounded-xs"
                          style={{
                            backgroundColor: items.value,
                          }}
                        ></div>
                      );
                  })}
                </div>
                <div className="w-full flex items-center content-center justify-between">
                  <CustomImage
                    src="/icons/delivery.png"
                    alt="size"
                    parentClasses="size-4"
                  />
                  <div className="  flex items-center content-center  gap-x-1.5">
                    <CustomImage
                      src="/icons/star.png"
                      alt="size"
                      parentClasses="size-4"
                    />
                    <p className="text-[10px]">4.5</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full h-[50px] overflow-hidden text-xs leading-5">
                  {items.title}
                </div>
                <div>
                  <div className="flex items-center content-center justify-between text-xs">
                    <div className="p-1 rounded-lg  bg-red--500 text-white ">
                      10%
                    </div>
                    <div className="line-through ">
                      {Number(134000).toLocaleString()}
                    </div>
                    <div>
                      <CustomImage
                        src="/icons/toman-icon.png"
                        alt="icons"
                        parentClasses="size-4"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    {Number(items.discount).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarProducts;
