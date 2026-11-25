import Link from "next/link";

export default function Home() {
  const movies = [
    { id: 1, title: "Сансрын аялал", emoji: "🚀", time: "14:00" },
    { id: 2, title: "Ойн нууц", emoji: "🌲", time: "16:30" },
    { id: 3, title: "Далайн баатар", emoji: "🌊", time: "18:00" },
    { id: 4, title: "Луу бид хоёр", emoji: "🐉", time: "20:15" },
  ];
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
      <div className="w-305 m-auto mt-15 ">
        <div className="text-black font-bold text-3xl">Өнөөдрийн Кинонууд</div>
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          {movies.map((movie, i) => {
            return (
              <Link
                href={`/movies/${movie.id}`}
                className="w-150 h-70 bg-white rounded-xl flex p-5 justify-center gap-1 flex-col"
              >
                <p className="text-6xl mb-3">{movie.emoji}</p>
                <span className="text-black text-2xl font-bold">
                  {movie.title}
                </span>
                <span className="text-gray-400 text-xl">🕐{movie.time}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
