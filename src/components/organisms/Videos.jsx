import React from "react";
import dados from "../../../dados.json";
import { Link } from "react-router-dom";

let playlists = dados.playlists;

//console.log(playlists);

// function Timeline(propriedades) {
//   // console.log("Dentro do componente", propriedades.playlists);
//   const playlistNames = Object.keys(propriedades.playlists);
//   // Statement
//   // Retorno por expressão
//   return (
//     <section
//       className="max-w-screen-xl grid grid-cols-3 md:grid-cols-2 gap-2 mt-5 content-center mx-auto p-4 "
//       key={propriedades.playlists}
//     >
//       {playlistNames.map((playlistName) => {
//         const videos = propriedades.playlists[playlistName];
//         {
//           /* console.log(playlistName);
//         console.log(videos); */
//         }
//         return (
//           <div>
//             {videos.map((video) => {
//               return (
//                 <div
//                   className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
//                   key={video.url}
//                 >
//                   <Link href={video.url} key={video.url} className="col-span-2">
//                     <img src={video.thumb} width="620" height="408" />
//                     <p className="text-align: justify overflow-hidden w-580 h-12">
//                       {video.title}
//                     </p>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </section>
//   );
// }

function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);

  class registroVideo {
    constructor(thumb, title, url) {
      this.thumb = thumb;
      this.title = title;
      this.url = url;
    }
  }

  // Class da lista de videos
  class listaVideos {
    constructor() {
      this.listaVideos = [];
    }
    // cria um novo video na coleção
    newVideo(thumb, title, url) {
      let p = new registroVideo(thumb, title, url);
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
  }

  let registro = new listaVideos();

  playlistNames.map((playlistName) => {
    const videos = propriedades.playlists[playlistName];
    videos.map((video) => {
      registro.newVideo(video.thumb, video.title, video.url);
    });
  });

  //console.log(registro);
  registro.todosVideos.map((element) => {
    console.log(element);
  });

  return (
    <section className="max-w-screen-xl grid grid-cols-1 xl:grid-cols-2 gap-2 mt-2 content-center mx-auto p-4 ">
      {registro.todosVideos.map((element) => {
        return (
          <div
            className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
            key={element.url}
          >
            {/* <Link to={element.url} key={element.url} className="col-span-2">
              <img src={element.thumb} width="620" height="408" />
              <p className="text-align: justify overflow-hidden w-580 h-12">
                {element.title}
              </p>
            </Link> */}
            <iframe
              className="aspect-video lg:h-80"
              src={element.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        );
      })}
    </section>
  );
}

//Timeline2(dados);

export default function Videos() {
  return (
    //<div className="container mx-auto p-4">

    <div>{Timeline(dados)}</div>
    //    </div>
  );
}
