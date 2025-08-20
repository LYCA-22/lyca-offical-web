import type { Metadata } from "next";
import "../styles/globals.css";
import { LinkBar } from "@/components/linkBar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "林園高中學生會 LYSA",
  description:
    "高雄市立林園高中學生會官方網站，致力於爭取學生權利、舉辦活動...等等。進入網站瞭解更多！",
  keywords: "林園高中學生會",
  authors: [{ name: "林園高中學生會" }],
  creator: "林園高中學生會",
  publisher: "林園高中學生會",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://lyhsca.org",
    title: "林園高中學生會 LYSA",
    description:
      "高雄市立林園高中學生會官方網站，致力於爭取學生權利、舉辦活動...等等。進入網站瞭解更多！",
    siteName: "林園高中學生會",
  },
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
        className={`antialiased font-medium h-dvh overflow-y-scroll flex flex-col overflow-x-hidden max-w-full`}
      >
        <LinkBar />
        <div id="main">{children}</div>
        <div className="p-5 bg-zinc-100 border border-border rounded-t-4xl mt-5 mx-5">
          <div className="w-full text-4xl m-3 font-neue font-bold">
            <p>林園高中學生會</p>
            <p className="text-lg opacity-40">2025 © LYCA</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={"/contact"}
              className="rounded-full p-2 pr-4 bg-white text-black border border-border flex gap-3 items-center group hover:opacity-50 transition-all w-fit"
            >
              <div className="p-1 rounded-full bg-green-500 text-black group-hover:bg-green-500">
                <ArrowRight size={20} />
              </div>
              <p className="text-xl max-sm:text-lg">聯絡我們</p>
            </Link>
            <Link
              href={"https://www.instagram.com/lyca_22nd/"}
              target="_blank"
              className="rounded-full p-2 pr-4 bg-green-500 text-white flex gap-3 items-center group hover:bg-black transition-all"
            >
              <div className="p-1 rounded-full bg-white text-black group-hover:bg-green-500 group-hover:text-white">
                <ArrowRight size={20} />
              </div>
              <p className="text-xl max-sm:text-lg">追蹤 IG</p>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
