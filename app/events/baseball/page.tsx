"use client";
import Image from "next/image";
import { gameSchema } from "./gameSchema";
import { Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [detailOpen, setDetailOpen] = useState<number>(-1);
  const [detailScore, setDetailScore] = useState<number>(-1);
  const [detailPlace, setDetailPlace] = useState<number>(-1);
  const scoreBgClassName =
    "bg-zinc-100 rounded-md px-2 p-1 text-center min-w-[35px]";
  const placeClassName = "rounded-md p-5 flex items-center justify-center";

  return (
    <main className="sm:p-8">
      <div className="my-5 p-5">
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
      <div className="my-5 p-5" aria-label="schedule">
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
      <div className="my-5 p-5" aria-label="place">
        <h1 className="text-2xl">場地表</h1>
        <p className="opacity-50 mt-2">更新日期：2025/05/07</p>
        <div
          aria-label="box"
          className="grid-cols-2 grid-rows-2 grid gap-3 my-2"
        >
          <div className={`${placeClassName} bg-zinc-100`}>C</div>
          <div className={`${placeClassName} bg-zinc-100`}>D</div>
          <div className={`${placeClassName} bg-zinc-100`}>A</div>
          <div className={`${placeClassName} bg-zinc-100`}>B</div>
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
      <div aria-label="game-consequence" className="my-5 bg-zinc-100/70 p-5">
        <h1 className="text-2xl">所有賽事結果</h1>
        <p className="opacity-50 mt-2">更新日期：2025/05/07</p>
        <ul className="flex flex-col gap-5 my-3">
          {gameSchema.map((item, index) => (
            <li
              key={index}
              aria-label={`game-${index}-detail`}
              className="p-2 flex flex-col gap-2 bg-white rounded-lg"
            >
              <div className="flex justify-between items-center p-3 pb-5 border-b-1 border-zinc-200 border-dashed">
                <div className="text-center flex items-center gap-4">
                  <p className="font-bold text-sm">{item.classA}</p>
                  <p className="italic text-4xl font-bold">{item.aScore}</p>
                </div>
                <p className="font-black text-2xl">VS</p>
                <div className="text-center flex items-center gap-4">
                  <p className="italic text-4xl font-bold">{item.bScore}</p>
                  <p className="font-bold text-sm">{item.classB}</p>
                </div>
              </div>
              <div className="flex justify-between mx-2">
                <p>場次</p>
                <p>{item.round}</p>
              </div>
              <div className="flex justify-between mx-2">
                <p>狀態</p>
                {item.start ? (
                  <p className="text-red-400 flex items-center gap-2">
                    <Check size={20}></Check>已結束
                  </p>
                ) : (
                  <p className="text-zinc-600 flex items-center gap-2">
                    <X size={20}></X>未開始
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center p-2">
                <button
                  onClick={() =>
                    setDetailOpen(index === detailOpen ? -1 : index)
                  }
                  className="flex items-center gap-2 text-sm cursor-pointer justify-center text-zinc-400"
                >
                  <ChevronDown
                    size={15}
                    className={`transition-all ${detailOpen === index ? "rotate-180" : ""}`}
                  ></ChevronDown>
                  {detailOpen === index ? <p>收合</p> : <p>查看詳細內容</p>}
                </button>
              </div>
              {detailOpen === index && (
                <>
                  <div className="flex justify-between mx-2">
                    <p>比賽時間</p>
                    <p>{item.time}</p>
                  </div>
                  <div aria-label="place-box" className="w-full relative px-2">
                    <button
                      onClick={() =>
                        setDetailPlace(detailPlace === index ? -1 : index)
                      }
                      className="flex justify-between items-center w-full"
                    >
                      <p>場地</p>
                      <div className="flex gap-3 items-center">
                        <p>{item.place}</p>
                        <ChevronDown
                          size={20}
                          className={`transition-all text-zinc-400 ${detailPlace === index ? "rotate-180" : ""}`}
                        ></ChevronDown>
                      </div>
                    </button>
                    {detailPlace === index && (
                      <div aria-label="place" className="py-2">
                        <div
                          aria-label="box"
                          className="grid-cols-2 grid-rows-2 grid gap-3 my-2"
                        >
                          <div
                            className={`${placeClassName} ${item.place === "C" ? "bg-sky-400 text-xl font-bold" : "bg-zinc-100"}`}
                          >
                            C
                          </div>
                          <div
                            className={`${placeClassName} ${item.place === "D" ? "bg-sky-400 text-xl font-bold" : "bg-zinc-100"}`}
                          >
                            D
                          </div>
                          <div
                            className={`${placeClassName} ${item.place === "A" ? "bg-sky-400 text-xl font-bold" : "bg-zinc-100"}`}
                          >
                            A
                          </div>
                          <div
                            className={`${placeClassName} ${item.place === "B" ? "bg-sky-400 text-xl font-bold" : "bg-zinc-100"}`}
                          >
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
                    )}
                  </div>
                </>
              )}
              {item.detailScore && detailOpen === index && (
                <div className="mx-2 mb-2">
                  <button
                    onClick={() =>
                      setDetailScore(detailScore === index ? -1 : index)
                    }
                    className="flex justify-between items-center w-full"
                  >
                    <p>詳細分數</p>
                    <ChevronDown
                      size={20}
                      className={`transition-all text-zinc-400 ${detailScore === index ? "rotate-180" : ""}`}
                    ></ChevronDown>
                  </button>
                  {detailScore === index && (
                    <ul className="mt-2 flex flex-col gap-2 pt-4 border-t border-zinc-200 border-dashed">
                      <li className="flex items-center justify-between">
                        <p>第一局</p>
                        <div className="flex items-center gap-2">
                          <p className={scoreBgClassName}>
                            {item.detailScore.A1}
                          </p>
                          <p>：</p>
                          <p className={scoreBgClassName}>
                            {item.detailScore.B1}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <p>第二局</p>
                        <div className="flex items-center gap-2">
                          <p className={scoreBgClassName}>
                            {item.detailScore.A2}
                          </p>
                          <p>：</p>
                          <p className={scoreBgClassName}>
                            {item.detailScore.B2}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <p>第三局</p>
                        <div className="flex items-center gap-2">
                          <p className={scoreBgClassName}>
                            {item.detailScore.A3}
                          </p>
                          <p>：</p>
                          <p className={scoreBgClassName}>
                            {item.detailScore.B3}
                          </p>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
