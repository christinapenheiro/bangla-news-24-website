import React from "react";
import IMainNews from "@/types/MainNewsType";
import { Card } from "@heroui/react";
import Image from "next/image";

const MainNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections/");
  const data = await res.json();
  const allNews = data.data;
  const mainNews = allNews[0].articles;

  return (
    // <div className="flex gap-5">
    //   <div className="">
    //     {mainNews.slice(0, 1).map((news: IMainNews) => (
    //       <div key={news.id}>
    //         <div className="card bg-base-100 w-96 shadow-sm">
    //           <figure>
    //             <Image
    //               src={news.imageUrl}
    //               alt={news.imageAlt}
    //               width={300}
    //               height={100}
    //             />
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title">
    //               {news.title}
    //               <div className="badge bg-[#C10007] text-white">
    //                 {news.category}
    //               </div>
    //             </h2>
    //             <p className="line-clamp-3">{news.description}</p>
    //           </div>
    //         </div>
    //         {/* <div>
    //           <Card className="w-[320px]" variant="secondary">
    //             <Card.Header>
    //               <Card.Title>Secondary</Card.Title>
    //               <Card.Description>
    //                 Medium prominence (bg-surface-secondary)
    //               </Card.Description>
    //             </Card.Header>
    //             <Card.Content>
    //               <p>Use to draw moderate attention</p>
    //             </Card.Content>
    //           </Card>
    //         </div> */}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="card max-h-fit ">
    //     {mainNews.slice(1, 5).map((news: IMainNews) => (
    //       <div key={news.id}>
    //         <Card
    //           className="w-[320px] h-26 overflow-hidden bg-white rounded-none"
    //           variant="secondary"
    //         >
    //           <Card.Header>
    //             <Card.Title className="text-[#C10007]">
    //               {news.category}
    //             </Card.Title>
    //             <Card.Description className="text-black cursor-pointer">{news.title}</Card.Description>
    //           </Card.Header>
    //         </Card>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex gap-5">
      <div className="">
        {mainNews.slice(0, 1).map((news: IMainNews) => (
          <div key={news.id} className="">
            <div className="h-[420] card bg-base-100 w-100 shadow-sm">
              <figure>
                <Image
                  src={news.imageUrl}
                  alt={news.imageAlt}
                  width={300}
                  height={100}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {news.title}
                  <div className="badge bg-[#C10007] text-white">
                    {news.category}
                  </div>
                </h2>
                <p className="line-clamp-3 leading-relaxed text-sm">{news.description}</p>
              </div>
            </div>
            {/* <div>
          <Card className="w-[320px]" variant="secondary">
            <Card.Header>
              <Card.Title>Secondary</Card.Title>
              <Card.Description>
                Medium prominence (bg-surface-secondary)
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <p>Use to draw moderate attention</p>
            </Card.Content>
          </Card>
        </div> */}
          </div>
        ))}
      </div>
      <div className="flex flex-col card gap-0 p-0 bg-base-100 shadow-sm w-110 h-[420]">
        {mainNews.slice(1, 5).map((news: IMainNews) => (
          <div key={news.id}>
            <Card
              className="w-full h-22 overflow-hidden bg-white  card-body rounded shadow-[0_-8px_10px_-3px_rgba(0,0,0,0.05)]"
              variant="secondary"
            >
              <Card.Header>
                <Card.Title className="text-[#C10007]">
                  {news.category}
                </Card.Title>
                <Card.Description className="text-black cursor-pointer text-lg">
                  {news.title}
                </Card.Description>
              </Card.Header>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
