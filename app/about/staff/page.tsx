import { staff } from "./config";

export default function Page() {
  return (
    <div className="pt-20">
      <div className="relative flex flex-col gap-3 font-neue font-bold m-3 my-5 items-center justify-center p-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
          <p className="text-lg">About</p>
        </div>
        <h1 className="max-sm:text-3xl text-5xl">幹部介紹</h1>
        <p className="max-sm:text-sm text-xl">林園高中學生會第 22 屆幹部</p>
      </div>
      <ul className="font-neue px-10">
        {staff.map((item, index) => (
          <li key={index} className="border-b last:border-0 border-border py-2">
            <div className="flex-col flex gap-2">
              <h2 className="font-bold opacity-50">
                {index + 1} / {item.title}
              </h2>
              <p className="text-2xl">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
