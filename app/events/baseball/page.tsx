import Image from "next/image";
import { gameSchema } from "./gameSchema";

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
      <div className="my-5" aria-label="schedule">
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
          <div className="flex justify-center sticky bottom-0">
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
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div className="my-5" aria-label="place">
        <h1 className="text-2xl">場地表</h1>
        <p className="opacity-50 mt-2">更新日期：2025/05/07</p>
        <div
          aria-label="box"
          className="grid-cols-2 grid-rows-2 grid gap-3 my-2"
        >
          <div className="bg-zinc-100 rounded-md p-5 flex items-center justify-center">
            C
          </div>
          <div className="bg-zinc-100 rounded-md p-5 flex items-center justify-center">
            D
          </div>
          <div className="bg-zinc-100 rounded-md p-5 flex items-center justify-center">
            A
          </div>
          <div className="bg-zinc-100 rounded-md p-5 flex items-center justify-center">
            B
          </div>
        </div>
        <div
          aria-label="road"
          className="w-full bg-zinc-900 p-3 rounded-md text-white flex items-center gap-2 justify-center mt-2"
        >
          <h1>道路</h1>
          <div className="border border-zinc-700 rounded-md p-1 text-sm">
            大會
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div aria-label="game-consequence" className="my-5">
        <h1 className="text-2xl">所有賽事結果</h1>
        <p className="opacity-50 mt-2">更新日期：2025/05/07</p>
        <ul className="flex flex-col gap-3 my-3">
          {gameSchema.map((item, index) => (
            <li
              key={index}
              aria-label={`game-${index}-detail`}
              className="py-2 flex flex-col gap-2"
            >
              <div className="bg-gradient-to-br from-zinc-200 to-white border-zinc-200 border rounded-md flex justify-between items-center p-3 mb-2">
                <div className="text-center">
                  <p className="font-bold text-sm">{item.classA}</p>
                  <p>{item.aScore}</p>
                </div>
                <p>V S</p>
                <div className="text-center">
                  <p className="font-bold text-sm">{item.classB}</p>
                  <p>{item.bScore}</p>
                </div>
              </div>
              <div className="flex justify-between mx-2">
                <p>場次</p>
                <p>{item.round}</p>
              </div>
              <div className="flex justify-between mx-2">
                <p>狀態</p>
                <p>
                  {item.start ? (
                    <p className="text-green-500">已結束</p>
                  ) : (
                    <p className="text-zinc-600">未開始</p>
                  )}
                </p>
              </div>
              {item.detailScore && (
                <div className="mx-2 border-t border-zinc-200 pt-2">
                  <h1 className="text-lg">詳細分數</h1>
                  <ul className="mt-2 flex flex-col gap-2">
                    <li className="flex items-center justify-between">
                      <p>第一局</p>
                      <div className="flex items-center gap-2">
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.A1}
                        </p>
                        <p>：</p>
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.B1}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <p>第二局</p>
                      <div className="flex items-center gap-2">
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.A2}
                        </p>
                        <p>：</p>
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.B2}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <p>第三局</p>
                      <div className="flex items-center gap-2">
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.A3}
                        </p>
                        <p>：</p>
                        <p className="bg-zinc-100 rounded-md px-2 p-1">
                          {item.detailScore.B3}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
