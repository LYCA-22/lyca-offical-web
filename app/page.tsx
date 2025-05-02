import { Cog } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 grow p-8">
      <Cog size={30}></Cog>
      <h1 className="text-3xl mt-2">目前網站仍在建置中</h1>
      <Link
        href={"./events/baseball"}
        className="p-3 px-5 shadow-2xl shadow-zinc-300 rounded-full bg-zinc-900 text-white hover:opacity-80 mt-5"
      >
        查閱班際排球資訊
      </Link>
    </div>
  );
}
