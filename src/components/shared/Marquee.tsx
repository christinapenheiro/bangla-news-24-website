import React from 'react';
import IMarquee from '@/types/MarqueeType';
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json()
    const marqueeData : IMarquee[] = data.data

    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex text-white bg-[#C10007] justify-center items-center">
          <span className="bg-red-800 px-2 py-2 font-semibold">সর্বশেষ</span>
          <div className=" flex-1 overflow-hidden">
            <MarqueeText direction="right" duration={10}>
              {marqueeData.map((data: IMarquee) => (
                <ul key={data.id} className="list-disc list-inside">
                  <li className="mr-2">{data.title}</li>
                </ul>
              ))}
            </MarqueeText>
          </div>
        </div>
      </div>
    );
};

export default Marquee;