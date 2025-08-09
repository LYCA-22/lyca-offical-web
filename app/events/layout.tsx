"use client";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main
      aria-label="event-main"
      className="bg-gradient-to-br from-white to-zinc-300"
    >
      {pathname === "/events" && (
        <div className="p-4 px-8 pt-8">
          <h1 className="text-3xl font-bold opacity-80">活動資訊</h1>
          <p className="opacity-30">All Events</p>
        </div>
      )}
      <div className="bg-white rounded-tr-4xl">{children}</div>
    </main>
  );
}
