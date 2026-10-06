import React from 'react';
import MainNews from './home/hero section/MainNews';
import MostRead from './home/hero section/MostRead';
import SelectedNews from './home/SelectedNews';
import BdSection from './home/BangladeshSection';
import IndiaNews from './home/IndiaNews';
import WorldNews from './home/WorldNews';
import HealthNews from './home/HealthNews';
import VideoNews from './home/VideoNews';
import OthersNews from './home/OthersNews';

const Hero = () => {
    return (
      <div className="mt-4 flex gap-5 max-w-7xl mx-auto flex-wrap sm:flex-nowrap">
        <div className="">
          <MainNews></MainNews>
          <div className="mt-5 m-2">
            <h2 className="font-bold">নির্বাচিত খবর</h2>
            <hr className="text-[#C10007] max-w-200 border" />
            <SelectedNews></SelectedNews>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">বাংলাদেশ</h2>
            <hr className="text-[#C10007] max-w-200 border" />
            <BdSection></BdSection>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">ভারত</h2>
            <hr className="text-[#C10007] max-w-200 border" />
            <IndiaNews></IndiaNews>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">বিশ্ব</h2>
            <hr className="text-[#C10007] max-w-200 border" />
            <WorldNews></WorldNews>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">স্বাস্থ্য</h2>
            <hr className="text-[#C10007] max-w-200 border" />
            <HealthNews></HealthNews>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">ভিডিও</h2>
            <hr className="text-[#C10007] max-w-200 border " />
            <VideoNews></VideoNews>
          </div>
          <div className="mt-5 m-2">
            <h2 className="font-bold">অন্যান্য খবর</h2>
            <hr className="text-[#C10007] max-w-200 border " />
            <OthersNews></OthersNews>
          </div>
        </div>
          <MostRead></MostRead>
      </div>
    );
};

export default Hero;