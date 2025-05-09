"use client";
import { Check, MoveDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function Page() {
  // 創建參考來追踪鼠標位置的元素
  const mouseFollower = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 註冊 GSAP 插件
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    // 鼠標跟隨效果
    const handleMouseMove = (e: MouseEvent): void => {
      if (mouseFollower.current) {
        gsap.to(mouseFollower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      }

      // 為標題添加視差效果
      gsap.to("[aria-label='title-text']", {
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
        duration: 0.5
      });
    
      // 為圖像添加視差效果
      gsap.to(".parallax-image", {
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
        duration: 0.8,
        stagger: 0.1
      });
    };

    // 監聽鼠標移動事件
    window.addEventListener("mousemove", handleMouseMove);

    // 標題文字進場動畫
    gsap.fromTo(
      "[aria-label='title-text']",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    );

    // 左右圖片進場動畫
    gsap.fromTo(
      ".parallax-image",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
    );

    // 主辦單位和經費贊助區塊動畫
    gsap.fromTo(
      ".sm\\:flex > div",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)",
      },
    );

    // 活動目的文字動畫
    gsap.fromTo(
      "[aria-label='活動目的']",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 },
    );

    // 評分方式卡片動畫
    gsap.fromTo(
      ".evaluation-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
    );

    // 相關時程區塊動畫
    gsap.fromTo(
      ".relative ul li",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
    );

    // 底部按鈕動畫
    gsap.fromTo(
      ".z-50.fixed",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 },
    );

    // 添加滾動觸發動畫
    // 主辦單位和經費贊助
    ScrollTrigger.create({
      trigger: ".sm\\:flex",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".sm\\:flex > div",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 },
        );
      },
      once: false,
    });

    // 活動目的
    ScrollTrigger.create({
      trigger: "[aria-label='活動目的']",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          "[aria-label='活動目的']", 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      },
      once: false
    });

    // 「我入選了」區塊
    ScrollTrigger.create({
      trigger: ".bg-gradient-to-br.from-amber-700",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".bg-gradient-to-br.from-amber-700",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1 },
        );
      },
      once: false,
    });

    // 清理事件監聽器
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-orange-200 relative pb-5 overflow-x-hidden">
      {/* 添加跟隨鼠標的元素 */}
      <div
        ref={mouseFollower}
        className="pointer-events-none fixed w-16 h-16 rounded-full bg-amber-500/50 blur-xl z-50 transform -translate-x-0 -translate-y-0 hidden md:block"
      ></div>
      <div
        aria-label="title"
        className="flex flex-col sm:justify-center items-center gap-4 p-9 pt-10 px-6"
      >
        <div
          aria-label="title-text"
          className="z-10 flex flex-col gap-5 sm:items-center justify-center sm:pt-14"
        >
          <h2 className="text-xl font-normal sm:text-2xl">林園高中</h2>
          <h1 className="text-3xl font-bold sm:text-5xl">
            創校 90 週年主視覺設計大賽
          </h1>
          <p className="font-customTwo text-2xl sm:text-3xl">
            \ 來投稿讓你的作品被大家看到 /
          </p>
          <div className="flex items-center gap-2 animate-bounce">
            <MoveDown size={20} className="opacity-50"></MoveDown>
            <p className="opacity-50">往下滑了解更多</p>
          </div>
        </div>
        <Image
          src={"/90year/image-2.png"}
          alt="插圖"
          width={200}
          height={200}
          priority
          className="parallax-image max-sm:-left-20 left-16 absolute z-0 sm:w-96 sm:top-12"
        ></Image>
        <Image
          src={"/90year/image-3.png"}
          alt="插圖"
          width={200}
          height={200}
          priority
          className="parallax-image max-sm:-right-20 right-16 top-32 absolute z-0 sm:w-96 sm:top-12"
        ></Image>
        <Image
          src={"/90year/image-1.png"}
          alt="插圖"
          width={300}
          height={300}
          className="parallax-image left-0 w-full max-w-[500px]"
          priority
        ></Image>
      </div>
      <main className="flex flex-col items-center justify-center gap-6 relative my-3">
        <div className="sm:flex gap-4 items-center justify-evenly w-full p-5">
          <div className="flex-col flex items-center gap-5 relative min-h-[100px] max-sm:mb-10">
            <div className="font-customTwo text-5xl relative w-fit">
              <h1 className="z-20 inline-block relative">主辦單位</h1>
              <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
            </div>
            <p className="text-lg text-amber-800">學務處訓育組、班聯會</p>
          </div>
          <div className="flex-col flex items-center gap-5 relative min-h-[100px]">
            <div className="font-customTwo text-5xl relative w-fit">
              <h1 className="z-20 inline-block relative">經費贊助</h1>
              <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
            </div>
            <p className="text-lg text-amber-800">林園高中家長會</p>
          </div>
        </div>
        <div className="flex-col flex items-center gap-5 relative min-h-[200px]" aria-label="活動目的">
          <div className="font-customTwo text-5xl relative w-fit">
            <h1 className="z-20 inline-block relative">活動目的</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <p className="text-lg text-amber-800 mx-6 text-center max-w-[400px]">
            為歡慶本校<strong> 「 創校九十週年校慶 」</strong>
            活動，特舉辦「林園高中創校九十校慶logo設計比賽」，盼透過學生對校園及故鄉的觀察，發揮創意設計，製作為各種紀念品，並作為未來推廣及相關活動、販售之用。
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-700 to-amber-100 w-full p-7 text-white flex max-sm:flex-col sm:gap-16 items-center justify-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-amber-900">我入選了</h1>
            <h1 className="text-5xl">可以做什麼？</h1>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="max-w-[800px] text-amber-700 mt-5 flex flex-col gap-3 bg-gradient-to-br from-orange-300 to-amber-50 rounded-3xl p-5">
              <li className="flex gap-2 items-center">
                <Check size={20}></Check>
                <p>做成 90 週年週邊商品</p>
              </li>
              <li className="flex gap-2 items-center">
                <Check size={20}></Check>
                <p>在校園各個角落張貼你的海報</p>
              </li>
              <li className="flex gap-2 items-center">
                <Check size={20}></Check>
                <p>大家都會看到你做的作品</p>
              </li>
              <li className="flex gap-2 items-center">
                <Check size={20}></Check>
                <p>獲得獎金，做更多事</p>
              </li>
              <li className="flex gap-2 items-center">
                <Check size={20}></Check>
                <p>跟同學炫耀這是你做的</p>
              </li>
            </ul>
            <p className="font-customTwo text-center text-2xl mt-5">
              不要考慮了～趕快按下「我要投稿」吧！
            </p>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center justify-center">
          <div className="font-customTwo text-4xl relative w-fit">
            <h1 className="z-20 inline-block relative">活動注意事項</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <ul className="max-w-[800px] text-amber-700 mt-5 flex flex-col gap-3 bg-gradient-to-br from-orange-300 to-amber-50 rounded-3xl p-5">
            <li className="flex gap-2 items-center">
              <X size={20} className="min-w-[20px]"></X>
              <p>禁止使用 AI 繪圖</p>
            </li>
            <li className="flex gap-2 items-center">
              <X size={20} className="min-w-[20px]"></X>
              <p>
                禁止使用 Canva 或其他線上素材網站之免費或付費素材，請自己繪畫
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <X size={20} className="min-w-[20px]"></X>
              <p>禁止使用商用字體，以免侵害他人版權</p>
            </li>
            <li className="flex gap-2 items-center">
              <X size={20} className="min-w-[20px]"></X>
              <p>請別人代做 / 畫</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="min-w-[20px]"></Check>
              <p>作品上不得標示任何創作者相關資訊，以維競賽公平。</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="min-w-[20px]"></Check>
              <p>包含林園高中90週年「Logo」(象徵圖案)。</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="min-w-[20px]"></Check>
              <p>繳交原始檔與jpg圖檔，點陣圖檔解析度至少為300dpi</p>
            </li>
          </ul>
        </div>
        <div className="p-7 flex flex-col items-center justify-center w-full relative">
          <div className="font-customTwo text-5xl relative w-fit my-5">
            <h1 className="z-20 inline-block relative">評分方式</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <div className="flex gap-12 justify-center w-full mt-5 max-sm:flex-col max-sm:items-center">
            <div className="max-w-[300px] border-2 bg-gradient-to-br from-orange-50/50 to-orange-200 rounded-3xl border-orange-100 p-3 px-8 pb-5 hover:scale-105 transition-all evaluation-card">
              <div className="flex items-center justify-between">
                <h1 className="italic font-bold text-3xl text-amber-800 my-5">
                  1 初選
                </h1>
                <div className="h-[2px] bg-amber-500 grow ml-5"></div>
              </div>
              <p className="text-amber-800">
                經班聯會、校內老師選出數件作品，進入全校票選。依照以下標準：
              </p>

              <ul className="max-w-[800px] text-amber-700 mt-5 flex flex-col gap-3">
                <li className="flex gap-4 items-center">
                  <p className="italic flex items-center font-black justify-center rounded-full text-amber-700 bg-white p-2">
                    30%
                  </p>
                  <p className="text-xl">主題意象表達</p>
                </li>
                <li className="flex gap-4 items-center">
                  <p className="italic flex items-center font-black justify-center rounded-full text-amber-700 bg-white p-2">
                    30%
                  </p>
                  <p className="text-xl">視覺效果及美感</p>
                </li>
                <li className="flex gap-4 items-center">
                  <p className="italic flex items-center font-black justify-center rounded-full text-amber-700 bg-white p-2">
                    20%
                  </p>
                  <p className="text-xl">創意型式表現</p>
                </li>
                <li className="flex gap-4 items-center">
                  <p className="italic flex items-center font-black justify-center rounded-full text-amber-700 bg-white p-2">
                    20%
                  </p>
                  <p className="text-xl">衍生商品可行性</p>
                </li>
              </ul>
            </div>
            <div className="w-[300px] border-2 bg-gradient-to-br from-orange-50/50 to-orange-200 rounded-3xl border-orange-100 p-3 px-8 pb-5 hover:scale-105 transition-all evaluation-card">
              <div className="flex items-center justify-between">
                <h1 className="italic font-bold text-3xl text-amber-800 my-5">
                  2 全校票選
                </h1>
                <div className="h-[2px] bg-amber-500 grow ml-5"></div>
              </div>
              <p className="text-amber-800">開放全校各班每人一票選出第一名。</p>
            </div>
          </div>
        </div>
        <div className="p-7 flex items-center relative justify-center max-sm:flex-col sm:gap-32 w-full">
          <div className="z-0">
            <Image
              src={"/90year/image-5.png"}
              alt="image-4"
              width={300}
              height={300}
              className="absolute -left-16 top-14 max-sm:top-32"
            ></Image>
          </div>
          <div className="z-10 sm:-ml-32">
            <div className="font-customTwo text-6xl relative w-fit">
              <h1 className="z-20 inline-block relative">相關時程</h1>
              <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
            </div>
            <p className="my-4 text-xl text-amber-700">
              要報名的人記得要注意時程喔！
            </p>
          </div>
          <div className="bg-white p-10 rounded-4xl shadow-xl shadow-zinc-200/80 z-10">
            <ul className="max-w-[800px] text-amber-700 flex flex-col gap-3 relative">
              <li className="flex flex-col gap-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 rounded-full h-2 w-2"></div>
                  <p className="flex items-center font-black justify-center text-amber-700">
                    即日起～114/09/15
                  </p>
                </div>
                <p className="text-xl ml-6">報名徵件</p>
                <Link
                  href={"https://tally.so/r/mDYD6j"}
                  target="_blank"
                  className="bg-amber-800 text-white p-2 px-4 hover:opacity-80 cursor-pointer w-fit rounded-full ml-6"
                >
                  點我前往報名
                </Link>
              </li>
              <li className="flex flex-col gap-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 rounded-full h-2 w-2"></div>
                  <p className="flex items-center font-black justify-center text-amber-700">
                    114/09/16～114/09/21
                  </p>
                </div>
                <p className="text-xl ml-6">作品初選</p>
              </li>
              <li className="flex flex-col gap-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 rounded-full h-2 w-2"></div>
                  <p className="flex items-center font-black justify-center text-amber-700">
                    114/09/21～114/09/24
                  </p>
                </div>
                <p className="text-xl ml-6">全校票選</p>
              </li>
              <li className="flex flex-col gap-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 rounded-full h-2 w-2"></div>
                  <p className="flex items-center font-black justify-center text-amber-700">
                    114/09/28
                  </p>
                </div>
                <p className="text-xl ml-6">獲選名單公告</p>
              </li>
              <li className="flex flex-col gap-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-700 rounded-full h-2 w-2"></div>
                  <p className="flex items-center font-black justify-center text-amber-700">
                    114/09/28~114/12/30
                  </p>
                </div>
                <p className="text-xl ml-6">週邊商品製作及販售</p>
              </li>
              <div className="bg-orange-200 rounded-full w-[2px] h-10/12 mt-2 absolute z-0 ml-1"></div>
            </ul>
          </div>
        </div>
      </main>
      <div className="z-50 fixed bottom-10 my-5 w-full flex items-center justify-center gap-5">
        <div className="bg-zinc-800 text-white relative p-3 px-5 text-lg rounded-full flex items-center gap-5 shadow-xl shadow-purple-400/50 border border-zinc-600">
          <Link
            href={"https://tally.so/r/mDYD6j"}
            className="hover:scale-105 transition-all"
          >
            我要投稿
          </Link>
          <div className="w-[1px] h-4 bg-white"></div>
          <Link
            className="hover:scale-105 transition-all"
            href={
              "https://storage.lyhsca.org/90%E5%91%A8%E5%B9%B4%E6%A0%A1%E6%85%B6logo%E6%A8%99%E8%AA%9E%E8%A8%AD%E8%A8%88%E7%AB%B6%E8%B3%BD%E5%A0%B1%E5%90%8D%E8%A1%A8%E5%8F%8A%E5%88%87%E7%B5%90%E6%9B%B8.docx"
            }
          >
            報名表下載
          </Link>
        </div>
      </div>
    </div>
  );
}
