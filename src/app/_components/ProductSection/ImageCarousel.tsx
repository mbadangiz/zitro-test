"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IN_ProductImage } from "@/core/types/interfaces";

function ImageCarousel({ images }: { images: IN_ProductImage[] }) {
  return (
    <div className="w-full max-w-xs mx-auto px-2 block lg:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={src.imageUrl}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
