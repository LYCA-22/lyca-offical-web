import { Check, MoveDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-orange-200 relative pb-5">
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
          <div className="flex items-center gap-2 animate-in">
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
          className="max-sm:-left-20 left-20 absolute z-0 sm:w-96 sm:top-12"
        ></Image>
        <Image
          src={"/90year/image-3.png"}
          alt="插圖"
          width={200}
          height={200}
          priority
          className="max-sm:-right-20 right-20 top-32 absolute z-0 sm:w-96 sm:top-12"
        ></Image>
        <Image
          src={"/90year/image-1.png"}
          alt="插圖"
          width={300}
          height={300}
          className="left-0 w-full max-w-[500px]"
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
        <div className="flex-col flex items-center gap-5 relative min-h-[200px]">
          <div className="font-customTwo text-5xl relative w-fit">
            <h1 className="z-20 inline-block relative">活動目的</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <p className="text-lg text-amber-800 mx-6 text-center max-w-[400px]">
            為歡慶本校<strong> 「 創校九十週年校慶 」</strong>
            活動，特舉辦「林園高中創校九十校慶logo設計比賽」，盼透過學生對校園及故鄉的觀察，發揮創意設計，志作為各種紀念品，並作為未來推廣及相關活動、販售之用。
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-700 to-amber-100 w-full p-7 text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center">我入選了，可以做什麼？</h1>
          <ul className="max-w-[800px] text-amber-700 mt-5 flex flex-col gap-3 bg-gradient-to-br from-orange-300 to-amber-50 rounded-2xl p-5">
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
        <div className="p-7 flex flex-col items-center justify-center">
          <div className="font-customTwo text-4xl relative w-fit">
            <h1 className="z-20 inline-block relative">活動注意事項</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <ul className="max-w-[800px] text-amber-700 mt-5 flex flex-col gap-3 bg-gradient-to-br from-orange-300 to-amber-50 rounded-2xl p-5">
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
        <div className="p-7 flex flex-col items-center justify-center">
          <div className="font-customTwo text-5xl relative w-fit">
            <h1 className="z-20 inline-block relative">評分方式</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
          <div>
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
            <div className="flex items-center justify-between">
              <h1 className="italic font-bold text-3xl text-amber-800 my-5">
                2 全校票選
              </h1>
              <div className="h-[2px] bg-amber-500 grow ml-5"></div>
            </div>
            <p className="text-amber-800">開放全校各班每人一票選出第一名。</p>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center justify-center">
          <div className="font-customTwo text-5xl relative w-fit">
            <h1 className="z-20 inline-block relative">相關時程</h1>
            <div className="w-full h-2 bg-amber-600 absolute bottom-2 z-0"></div>
          </div>
        </div>
      </main>
      <div className="z-50 fixed bottom-10 my-5 w-full flex items-center justify-center gap-5">
        <div className="bg-zinc-800 text-white relative p-3 px-5 text-lg rounded-full flex items-center gap-5 shadow-xl shadow-purple-400/50 border border-zinc-600">
          <Link
            href={"./90year/apply"}
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
