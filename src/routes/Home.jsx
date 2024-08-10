import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";


export default function Home() {
  // Get movie form the api
  const [movies, setMovies] = useState([]);
  const getAllMovie = async () => {
    const response = await fetch("http://localhost:4000/movies");
    const movies = await response.json();
    setMovies(movies);
  };

  // Use Effect hook
  useEffect(() => {
    // Get movie function
    getAllMovie();
  }, []);

  return (
    <main>
      <section className="w-[99%] mx-auto">
        <div className="mx-auto grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}
