import Link from 'next/link';
import React from 'react';
import NavLinkType from '@/types/NavLinkType';




const Navlink = async() => {
 const res = await fetch("https://news-api-v2.vercel.app/api/categories");
 const data = await res.json();
 const navs : NavLinkType[] = data.data.filter((nav:NavLinkType) => nav.scrapable);



    return (
      <div className="flex gap-6 font-semibold">
        <Link href="/">হোম</Link>
        {navs.map((nav:NavLinkType) => (
          <Link href={nav.slug} key={nav.topicId}>
            {nav.title}
          </Link>
        ))}
      </div>
    );
};

export default Navlink;