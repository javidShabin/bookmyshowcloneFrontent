import React from "react";

export default function MovieCard(props) {
  // Destrucring the props
  const { movie } = props;
  return (
    <main>
      <div className="text-center">
        <img src={movie.thumbnail} className="min-w-20 rounded-md shadow-2xl " />
        <h2 className="font-semibold mt-3 text-[18px]">{movie.title}</h2>
      </div>
    </main>
  );
}
