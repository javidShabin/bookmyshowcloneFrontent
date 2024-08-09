import React from "react";

export default function MovieCard(props) {
  // Destrucring the props
  const { movie } = props;
  return (
    <main>
      <div>
        <img src={movie.thumbnail} />
        <h2>{movie.title}</h2>
      </div>
    </main>
  );
}
