import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle: "full"
    })



  return (
    <div className="grid grid-cols-3 mt-5 container mx-auto">
      <div className="flex flex-col  items-center text-center gap-3 col-span-2">
        <div className="flex gap-2">
          <Image src={"/logo.webp"} alt="logo" width={50} height={50}></Image>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-[#C10007]">
              Bangla News 24
            </h1>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 col-span-1">
        <Button variant="ghost" className="rounded-sm">
          সাইন ইন
        </Button>
        <Button variant="danger" className="bg-[#C10007] rounded-sm">
          সাইন আপ
        </Button>
      </div>
    </div>
  );
};

export default Header;
