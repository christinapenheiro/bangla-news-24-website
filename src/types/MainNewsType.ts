export default interface IMainNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: "প্রধান খবর";
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: "BBC Bangla";
  rank?:number;
}