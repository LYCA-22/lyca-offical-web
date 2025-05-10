import { ArrowRight, Cog } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-7 text-4xl font-normal leading-relaxed">
        <h1>
          歡迎來到<strong>林園高中班聯會</strong>官方網站
        </h1>
      </div>
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div className="flex flex-col justify-center gap-2 grow p-8">
        <div className="flex items-center gap-2">
          <Cog size={20}></Cog>
          <h1 className="text-xl">目前網站仍在建置中</h1>
        </div>
        <div className="pb-2">以下為可使用的服務：</div>
        <Link
          href={"./events/baseball"}
          className="hover:opacity-50 bg-zinc-100 border border-zinc-200 p-3 rounded-2xl opacity-80 flex justify-between items-center"
        >
          查閱班際排球資訊
          <ArrowRight size={20} className="opacity-80"></ArrowRight>
        </Link>
        <Link
          href={"./events/90year"}
          className="hover:opacity-50 bg-zinc-100 border border-zinc-200 p-3 rounded-2xl opacity-80 flex justify-between items-center mt-2"
        >
          90 週年主視覺設計大賽活動網站
          <ArrowRight size={20} className="opacity-80"></ArrowRight>
        </Link>
      </div>
    </>
  );
}
