"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";
const FullScreenSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
        speed={800}
      >
        <SwiperSlide className="">
          <Image src="/slide-1.webp" alt="slid-1" className="rounded-none" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/slide-2.webp" alt="slid-1" className="rounded-none" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/slide-3.webp" alt="slid-1" className="rounded-none" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src="/slide-4.webp" alt="slid-1" className="rounded-none" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FullScreenSwiper;
