import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100 ">
      <div className="w-screen h-15 flex gap-3 bg-[#08062B] items-center pl-4">
        <Link href="/" className="text-lg font-[600] text-white">
          🎬 PineCinema
        </Link>
        <Link href="/movies" className="text-lg font-[600] text-gray-400">
          Кинонууд
        </Link>
        <Link href="/about" className="text-lg font-[600] text-gray-400">
          Бидний тухай
        </Link>
      </div>
      <div className="w-305 m-auto mt-15 flex gap-2 flex-col">
        <span className="text-black font-bold text-3xl">Бидний тухай</span>
        <span className="text-gray-600 mt-4">
          📍Хаяг: Багануур дүүрэг, Ямар нэгэн газар
        </span>
        <span className="text-gray-600 ">
          🕐 Цагийн хуваарь: Өдөр бүр 00:00 - 9:00
        </span>
        <span className="text-gray-600 ">☎️ Утас: 9911-6677</span>
        <Link href="/" className="text-blue-400 underline-offset-2 mt-5">
          ← Нүүр хуудас руу буцах
        </Link>
      </div>
    </div>
  );
}
