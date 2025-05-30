"use client";
import { Slash } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main aria-label="event-main">
      {!pathname.includes("90year") && (
        <div className="flex gap-2 items-center mx-5 my-2 bg-zinc-100 p-2 rounded-2xl px-4">
          <p className="opacity-50">首頁</p>
          <Slash size={12} strokeWidth={3} className="opacity-50"></Slash>
          <p className="opacity-50">活動資訊</p>
          <Slash size={12} strokeWidth={3} className="opacity-50"></Slash>
          {pathname.includes("stucamp") && <p>2025 學生自治工作坊</p>}
          {pathname.includes("baseball") && <p>113-2 班際排球</p>}
        </div>
      )}
      {children}
    </main>
  );
}
