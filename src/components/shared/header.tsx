import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import Navlink from "./Navlink";
import Marquee from "./Marquee";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle: "full"
    })



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-5 px-4 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.webp"}
                alt="logo"
                width={50}
                height={50}
                className="object-contain rounded-md shadow-sm"
              ></Image>
              <div className="text-left">
                <h1 className="text-2xl lg:text-3xl font-extrabold text-[#C10007] tracking-tight">
                  Bangla News 24
                </h1>
                <p className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mt-0.5">
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2.5 justify-center md:justify-end">
            <Button
              variant="ghost"
              className="rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              সাইন ইন
            </Button>
            <Button
              variant="danger"
              className="bg-[#C10007] hover:bg-[#a00006] text-white rounded-md px-4 py-2 text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-95"
            >
              সাইন আপ
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center text-center justify-center mt-5 pt-2 pb-2 border-y">
        <Navlink></Navlink>
      </div>
      <div className="bg-[#C10007]">
        <Marquee></Marquee>
      </div>
    </>
  );
};

export default Header;
