import { useState } from "react";
import { movies } from "./data/movies";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="bg-[#192026] min-h-screen pb-10">
      <header>
        <div className="flex justify-between items-center max-w-[1200px] mx-auto py-4">
          <h1 className="font-bold text-[36px] text-white">Anonime</h1>
          <p className="text-[18px] text-[#868686]">Home</p>
          <p className="text-[18px] text-[#868686]">List anime</p>
          <input
            className="bg-[#374151] rounded-[37px] w-[375px] h-[48px] px-4 text-white placeholder-gray-400 outline-none"
            type="text"
            placeholder="Search anime or movie"
          />
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto">
        <h1 className="text-white text-[32px] font-semibold">Explore</h1>
        <h2 className="text-[#868686] text-[22px] mb-4">
          What are you gonna watch today ?
        </h2>

        <Banner movie={selectedMovie} />

        <h1 className="font-semibold text-[36px] text-white mt-10 mb-4">
          New Release
        </h1>

        <div className="flex justify-between">
          {movies.slice(1).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={setSelectedMovie}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;