import type { Metadata } from "next";
import "../styles/globals.css";
import Image from "next/image";
import { LinkBar } from "@/components/linkBar";

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
        className={`antialiased font-custom font-medium min-h-dvh flex flex-col overflow-x-hidden max-w-full`}
      >
        <LinkBar />
        <div id="main">{children}</div>
        <footer className="w-full bg-zinc-50 p-5 flex flex-col items-center justify-center text-sm gap-2 mt-auto pb-32">
          <Image
            src={"/lyca-logo.svg"}
            alt="lyca-logo"
            width={100}
            height={200}
          ></Image>
          <p className="text-foreground/50">本網站由班聯會資訊組維護與建置</p>
          <p className="text-foreground/50">2025 © 林園高中班聯會 版權所有</p>
        </footer>
      </body>
    </html>
  );
}
