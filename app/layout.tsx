import type { Metadata } from "next";
import "../styles/globals.css";
import Image from "next/image";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "LYCA｜林園班聯 22 屆",
  description: "高雄市立林園高中第二十二屆班聯會官方網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          rel="preload"
          href="/fonts/ChenYuluoyan.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`antialiased font-custom font-medium min-h-dvh flex flex-col overflow-x-hidden max-w-full`}
      >
        <Header />
        <div className="pt-12">{children}</div>
        <footer className="w-full bg-black p-5 flex flex-col items-center justify-center text-sm gap-2 mt-auto">
          <Image
            className="invert"
            src={"/lyca-logo.svg"}
            alt="lyca-logo"
            width={100}
            height={200}
          ></Image>
          <p className="text-white/50">本網站由班聯會資訊組維護與建置</p>
          <p className="text-white/50">2025 © 林園高中班聯會 版權所有</p>
        </footer>
      </body>
    </html>
  );
}
