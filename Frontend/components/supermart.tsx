"use client";
import React from "react";
import { Link, Image, ScrollShadow } from "@nextui-org/react";

export const Supermart = () => {
  return (
    <>
      <ScrollShadow orientation="horizontal" className="hide-scrollbar">
        <div className=" flex gap-9 items-center justify-between">
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="grocery.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Grocery</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="mobiles.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Mobiles</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="fashion.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Fashion</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="electronics.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Electronics</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="home&furniture.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Home & Furniture</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="appliances.webp"
                  alt="Appliances"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Appliances</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="travel.webp"
                  alt="Travel"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Travel</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="beautyToys.webp"
                  alt="Beauty"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm ">Beauty & Toys</span>
            </div>
          </Link>
          <Link className=" font-semibold" color="foreground">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16">
                <Image
                  src="twoWheelers.webp"
                  alt="Grocery"
                  className="w-full h-full"
                />
              </div>
              <span className="mt-1 text-xs sm:text-sm">Two Wheelers</span>
            </div>
          </Link>
        </div>
      </ScrollShadow>
    </>
  );
};
