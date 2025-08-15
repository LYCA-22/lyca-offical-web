import type { Metadata } from "next";
import "../styles/globals.css";
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
        className={`antialiased font-medium h-dvh overflow-y-scroll flex flex-col overflow-x-hidden max-w-full`}
      >
        <LinkBar />
        <div id="main" className="mt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
