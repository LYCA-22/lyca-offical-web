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
    <div className="p-3 px-5">
      <div className="flex gap-2 items-center">
        <p className="opacity-50">首頁</p>
        <Slash size={12} strokeWidth={3} className="opacity-50"></Slash>
        <p className="opacity-50">活動資訊</p>
        <Slash size={12} strokeWidth={3} className="opacity-50"></Slash>
        {pathname.includes("stucamp") && <p>2025 學生自治工作坊</p>}
        {pathname.includes("baseball") && <p>113-2 班際排球</p>}
      </div>
      {children}
    </div>
  );
}
