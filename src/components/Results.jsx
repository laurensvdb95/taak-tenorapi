import React from "react";

export default function Result({ gifs }) {
  return (
    <div className="results">
      {gifs.map(gif => {
        return (
          <a
            href={gif.url}
            key={gif.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gif.media[0].tinygif.url} alt="" />
          </a>
        );
      })}
    </div>
  );
}
