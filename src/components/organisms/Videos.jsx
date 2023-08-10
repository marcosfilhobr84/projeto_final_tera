import React from "react";
import dados from "../../../dados.json";

let playlists = dados.playlists;

//console.log(playlists);

function Timeline(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <div className="max-w-screen-xl grid grid-cols-3 md:grid-cols-2 gap-2 mt-20 content-center mx-auto p-4 ">
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section key={videos}>
            {/* <h2>{playlistName}</h2> */}
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} key={video.url} className="col-span-2">
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                    <br></br>
                    <br></br>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default function Videos() {
  return (
    //<div className="container mx-auto p-4">

    <div>
      {Timeline(dados)}

      {/* <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">FULL STACK DEVELOPMENT</h1>
            <p className="text-gray-200 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus eveniet facere quos, deserunt modi aut dicta sed
              quia labore earum perferendis ea placeat voluptatum, minus
              consequatur officia voluptates, ab magnam!
            </p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">
              Saiba Mais
            </button>
          </div>

          <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">DATA ANALYTICS</h1>
            <p className="text-gray-200 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus eveniet facere quos, deserunt modi aut dicta sed
              quia labore earum perferendis ea placeat voluptatum, minus
              consequatur officia voluptates, ab magnam!
            </p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">
              Saiba Mais
            </button>
          </div>

          <div className="bg-blue-950 rounded-lg p-4">
            <h1 className="text-white text-2xl mb-2">
              DIGITAL PRODUCT (UX/UI)
            </h1>
            <p className="text-gray-200 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus eveniet facere quos, deserunt modi aut dicta sed
              quia labore earum perferendis ea placeat voluptatum, minus
              consequatur officia voluptates, ab magnam!
            </p>
            <button className="bg-gray-300 text-blue-950 text-md mt-20 p-2 rounded-md hover:bg-blue-600 hover:text-gray-200 transition-all">
              Saiba Mais
            </button>
          </div>
        </div> */}
    </div>
    //    </div>
  );
}
