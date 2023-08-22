import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../helpers/api";
import Loading from "./Loading";

// function returnAllVideos(propriedades, typeVideos) {
//   const playlistNames = Object.keys(propriedades.playlists);
//   //const [isShown, setIsShown] = useState(false);

//   class registroVideo {
//     constructor(thumb, title, url) {
//       this.thumb = thumb;
//       this.title = title;
//       this.url = url;
//     }
//   }

//   // Class da lista de videos
//   class listaVideos {
//     constructor() {
//       this.listaVideos = [];
//     }
//     // cria um novo video na coleção
//     newVideo(thumb, title, url) {
//       let p = new registroVideo(thumb, title, url);
//       this.listaVideos.push(p);
//       return p;
//     }
//     get todosVideos() {
//       return this.listaVideos;
//     }
//     // retorna o numero de videos.
//     get numberOfVideos() {
//       return this.listaVideos.length;
//     }
//   }

//   let registro = new listaVideos();

//   playlistNames.map((playlistName) => {
//     const videos = propriedades.playlists[playlistName];
//     if (playlistName === typeVideos) {
//       videos.map((video) => {
//         registro.newVideo(video.thumb, video.title, video.url);
//       });
//     }
//   });

//   // //console.log(registro);
//   // registro.todosVideos.map((element) => {
//   //   console.log(element);
//   // });

//   return registro.todosVideos;
// }

function Timeline(videos, playlistName) {
  // console.log(playlist);

  console.log(videos);

  class registroVideo {
    constructor(_id, playlist, url) {
      this._id = _id;
      this.playlist = playlist;
      this.url = url;
    }
  }

  // Class da lista de videos
  class listaVideos {
    constructor() {
      this.listaVideos = [];
    }
    // cria um novo video na coleção
    newVideo(_id, playlist, url) {
      let p = new registroVideo(_id, playlist, url);
      this.listaVideos.push(p);
      return p;
    }
    get todosVideos() {
      return this.listaVideos;
    }
    // retorna o numero de videos.
    get numberOfVideos() {
      return this.listaVideos.length;
    }

    // get todasPlaylists() {
    //   let playlists = [];

    //   this.listaVideos.map((item) => {
    //     playlists.push(item.playlist);
    //   });
    //   let playlistsUnique = new Set(playlists);
    //   return playlistsUnique;
    // }
  }

  let registro = new listaVideos();

  videos.map((video) => {
    if (video.nome == null) {
      registro.newVideo(video._id, video.playlist, video.url);
    } else {
      if (video.nome == playlistName) {
        registro.newVideo(video._id, video.playlist, video.url);
      }
    }
  });

  let x = [];
  registro.todosVideos.map((item) => {
    console.log(item.playlist);
    x.push(item.playlist);
  });

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const distinctFilter = x.filter(distinct);

  console.log(distinctFilter);
}

function returnPlaylists(videos) {
  //let x = Timeline(videos);

  //console.log(x);

  let listaPlaylists = [];
  let uniqueListaPlaylists = new Set();

  //console.log(videos);
  //const playlistNames = Object.keys(propriedades.playlists);
  videos.map((video) => {
    listaPlaylists.push(video.playlist[0]);
    uniqueListaPlaylists.add(video.playlist[0]);
  });

  //console.log(listaPlaylists);
  //console.log(uniqueListaPlaylists);

  // let x = set(listaPlaylists);
  // console.log(x);

  return (
    <>
      {Array.from(uniqueListaPlaylists).map((nome) => (
        <Link
          className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          to={`/cursos/${nome}`}
          key={nome}
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
          <span className="ml-2 text-sm font-medium">{nome}</span>
        </Link>
      ))}
    </>
  );
}

//console.log(returnPlaylists(dados));

export default function Sidebar() {
  const [video, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/courses/").then((response) => {
      setVideos(response.data);
      setIsLoading(false);
    });
  }, []);

  //console.log(video);

  //video.map((itens) => console.log(item));
  //returnPlaylists(video);
  //console.log(returnPlaylists(video));
  //Timeline(video);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col items-center w-50 h-full overflow-hidden text-gray-400 bg-gray-900">
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pesquise..."
        ></input>
      </div>
      <div className="flex items-center w-full px-3 mt-3">
        <svg
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="ml-2 text-sm font-bold">Cursos</span>
      </div>

      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          {returnPlaylists(video)}
        </div>
      </div>
    </div>
  );
}
