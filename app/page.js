import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
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
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-3  ">
          <span className="text-[40px] text-black font-bold">
            🍿 PineCinema
          </span>
          <span className="text-gray-700">
            Ulaanbaatariin hangiin jojkon kino taatar
          </span>
        </div>
        <div className="flex gap-3">
          <Link
            href="/movies"
            className="w-35 h-15 rounded-md text-black bg-yellow-400 flex justify-center items-center"
          >
            Kinonuud uzeh
          </Link>
          <Link
            href="/about"
            className="w-35 h-15 text-black rounded-md border-2 border-black flex justify-center items-center"
          >
            Bidnii tuhai
          </Link>
        </div>
      </div>
    </div>
  );
}
