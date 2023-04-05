import React from "react";

function MovieCard({ movie: { Title, Year, Genre, Director, Actors, Awards, Poster } }) {
  return (
    <>
      <img
        src={Poster !== "N/A" ? Poster : "placeholder-image.jpg"}
        alt={`${Title} poster`}
      />
      <h2>{Title}</h2>
      <p>
        Lanseringsår: {Year} <br />
        Sjanger: {Genre} <br />
        Regissør: {Director} <br />
        Skuespillere: {Actors} <br />
        Pris: {Awards} <br />
      </p>
    </>
  );
}
//Poster=Bilde
export default MovieCard;