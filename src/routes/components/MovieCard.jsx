import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  // Destrucring the props
  const { movie } = props;
  return (
    <article>
      <div className="text-center">
        <Link to={`movie/${movie._id}`}><img src={movie.thumbnail} className="min-w-20 rounded-md shadow-2xl " /></Link>
        <h2 className="font-semibold mt-3 text-[18px]">{movie.title}</h2>
      </div>
    </article>
  );
}
