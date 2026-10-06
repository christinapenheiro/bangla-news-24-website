import React from "react";
import IMainNews from "@/types/MainNewsType";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews = data.data;

  return (
    <div className="mb-10 p-4 max-w-150 mx-auto">
      <h3 className="text-xl font-bold">সর্বাধিক পঠিত</h3>
      {mostReadNews.map((news: IMainNews) => (
        <div
          key={news.rank}
          className="cursor-pointer hover:text-[#C10007]"
        >
          <h3 className="text-md font-bold">
            <span className="text-[#C10007] font-bold mr-2 text-[18px]">{news.rank}</span>
            {news.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
