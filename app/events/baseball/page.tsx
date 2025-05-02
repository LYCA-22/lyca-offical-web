import Image from "next/image";

export default function Page() {
  return (
    <main className="sm:p-8">
      <div className="my-5">
        <div aria-label="date">
          <h1 className="text-2xl">比賽日期</h1>
          <p className="mt-3">本次賽事分別進行三次舉行：</p>
          <ol start={1} className="list-decimal ml-8 flex flex-col gap-2 mt-2">
            <li>
              2025/05/07（星期三）
              <p className="text-sm opacity-50">
                備註：此日僅進行與二忠、二仁比的場次
              </p>
            </li>
            <li>2025/05/12（星期一）</li>
            <li>2025/05/19（星期一）</li>
          </ol>
        </div>
      </div>
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div className="my-5">
        <div aria-label="schedule">
          <h1 className="text-2xl">賽程表</h1>
          <p className="opacity-50 mt-2">
            更新日期：2025/05/02 ｜ 抽籤日期：2025/05/02
          </p>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/baseball/schedule.png"}
              alt="班際排球賽程圖"
              className="mt-3"
              width={800}
              height={100}
            ></Image>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/share/BAFj2QuCQ9"
                target="_blank"
                className="p-3 px-5 shadow-2xl shadow-zinc-300 rounded-full bg-zinc-900 text-white hover:opacity-80 my-5"
              >
                觀看抽籤直播
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
