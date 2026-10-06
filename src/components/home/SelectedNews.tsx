import React from "react";
import IMainNews from "@/types/MainNewsType";
import Image from "next/image";

const SelectedNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const selectedNews = data.data[1].articles;

  return (
    // <div className="flex flex-wrap gap-3">
    //   {/* <h3>নির্বাচিত খবর</h3>
    //   <hr /> */}
    //   {selectedNews.map((news: IMainNews) => (
    //     <div key={news.id} className="">
    //       <div className="bg-base-100 w-50 h-90 shadow-sm">
    //         <figure className="px-10 pt-10">
    //           <Image src={news.imageUrl} alt={news.imageAlt} width={400} height={300} className=""
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="">{news.category}</h2>
    //           <h3>
    //             {news.title}
    //           </h3>
    //           <p className="line-clamp-2">{news.description}</p>
    //           <div className="card-actions">
    //             <p className="text-gray-400">{news.firstPublished}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="flex flex-wrap gap-4 mt-4">
      {selectedNews.map((news: IMainNews) => (
        <div
          key={news.id}
          className="card w-64 bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all duration-200 overflow-hidden rounded-xl"
        >
          {/* Edge-to-edge thumbnail */}
          <figure className="relative w-full aspect-video bg-base-200 overflow-hidden">
            <Image
              src={news.imageUrl}
              alt={news.imageAlt || news.title}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Card Content */}
          <div className="card-body p-4 gap-2">
            {/* Category Pill */}
            <span className="badge bg-none shadow-none badge-sm text-[11px] font-medium self-start text-[#C10007]">
              {news.category}
            </span>

            {/* Title */}
            <h3 className="card-title text-sm font-semibold leading-snug hover:text-[#C10007] transition-colors cursor-pointer">
              {news.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
              {news.description}
            </p>

            {/* Footer Meta */}
            <div className="card-actions justify-between items-center mt-2 pt-2 border-t border-base-200">
              <span className="text-[11px] text-base-content/50">
                {news.firstPublished}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedNews;
