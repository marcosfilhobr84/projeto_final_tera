import React from "react";
import dados from "../../../dados.json";
import { Link } from "react-router-dom";

let playlists = dados.playlists;

//console.log(playlists);

function Timeline(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <section
      className="max-w-screen-xl grid grid-cols-3 md:grid-cols-2 gap-2 mt-5 content-center mx-auto p-4 "
      key={propriedades.playlists}
    >
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <div>
            {videos.map((video) => {
              return (
                <div
                  className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
                  key={video.url}
                >
                  <Link href={video.url} key={video.url} className="col-span-2">
                    <img src={video.thumb} width="620" height="408" />
                    <p className="text-align: justify overflow-hidden w-580 h-12">
                      {video.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

function Timeline2(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  playlistNames.videos.map;

  return (
    <div
      className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
      key={propriedades.playlists}
    >
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <div>
            {videos.map((video) => {
              return (
                <div
                  className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
                  key={video.url}
                >
                  <Link href={video.url} key={video.url} className="col-span-2">
                    <img src={video.thumb} width="620" height="408" />
                    <p className="text-align: justify overflow-hidden w-580 h-12">
                      {video.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function Videos() {
  return (
    //<div className="container mx-auto p-4">

    <div>{Timeline(dados)}</div>
    //    </div>
  );
}
