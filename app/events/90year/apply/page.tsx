"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Page() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 1500);
  });

  return (
    <div className="p-5">
      <div
        className={`${hidden && "hidden"} z-50 fixed overflow-hidden bg-zinc-100 h-full w-full flex items-center justify-center top-0 left-0`}
      >
        <div className="bg-zinc-800/90 backdrop-blur-3xl rounded-xl p-3">
          <svg
            width="50"
            height="50"
            viewBox="0 0 200 200"
            color="#ffffff"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="spinner-secondHalf">
                <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
                <stop
                  offset="100%"
                  stopOpacity="0.5"
                  stopColor="currentColor"
                />
              </linearGradient>
              <linearGradient id="spinner-firstHalf">
                <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
                <stop
                  offset="100%"
                  stopOpacity="0.5"
                  stopColor="currentColor"
                />
              </linearGradient>
            </defs>

            <g strokeWidth="8">
              <path
                stroke="url(#spinner-secondHalf)"
                d="M 4 100 A 96 96 0 0 1 196 100"
              />
              <path
                stroke="url(#spinner-firstHalf)"
                d="M 196 100 A 96 96 0 0 1 4 100"
              />

              <path
                stroke="currentColor"
                strokeLinecap="round"
                d="M 4 100 A 96 96 0 0 1 4 98"
              />
            </g>

            <animateTransform
              from="0 0 0"
              to="360 0 0"
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1300ms"
            />
          </svg>
        </div>
      </div>
      {/* 動態載入 Tally 的嵌入腳本 */}
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <iframe
        data-tally-src="https://tally.so/embed/mDYD6j?alignLeft=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="845"
        title="90周年校慶Logo徵稿活動"
      ></iframe>
    </div>
  );
}
