function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="w-[170px] cursor-pointer"
      onClick={() => onSelect(movie)}
    >
      <div className="relative w-[170px] h-[184px] rounded-[12px] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-2 left-0 w-full text-center text-white text-[14px]">
          Episode {movie.episode}
        </p>
      </div>
      <h3 className="text-white font-semibold text-[16px] text-center mt-2 truncate">
        {movie.movieName}
      </h3>
    </div>
  );
}

export default MovieCard;