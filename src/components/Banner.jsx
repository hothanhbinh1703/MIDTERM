function Banner({ movie }) {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={movie.image}
        alt={movie.movieName}
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div className="absolute bottom-8 left-8 max-w-[420px] text-white">
        <h2 className="font-bold text-[36px]">{movie.movieName}</h2>
        <p className="text-[14px] line-clamp-3">{movie.description}</p>
      </div>
    </div>
  );
}

export default Banner;