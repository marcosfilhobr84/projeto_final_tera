import React, { useEffect, useState } from "react";
import api from "../helpers/api";
import Loading from "../molecules/Loading";

function Timeline(videos, playlistName) {
  // console.log(playlist);

  //console.log(videos);

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
      let p = new registroVideo(_id, playlist[0], url);
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

  videos.map((video) => {
    // console.log(video.playlist[0]);
    // console.log(playlistName);
    // console.log(playlistName == null);
    if (playlistName == null) {
      registro.newVideo(video._id, video.playlist, video.url);
    } else {
      if (video.playlist[0] == playlistName) {
        registro.newVideo(video._id, video.playlist, video.url);
      }
    }
  });

  // console.log(registro.todosVideos);
  return (
    <section className="max-w-screen-xl grid grid-cols-1 xl:grid-cols-2 gap-2 mt-2 content-center mx-auto p-4 ">
      {registro.todosVideos.map((element) => {
        return (
          <div
            className="flex flex-wrap justify-center box-content h-200 w-200 p-4"
            key={element._id}
          >
            <iframe
              className="aspect-video lg:h-80"
              src={element.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </section>
  );
}

//Timeline2(dados);

export default function Videos(props) {
  const [video, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/courses/").then((response) => {
      setVideos(response.data);
      setIsLoading(false);
    });
  }, []);

  //console.log(video);

  //console.log(props.nome);
  return isLoading ? (
    <Loading />
  ) : (
    //<div className="container mx-auto p-4">

    <div>{Timeline(video, props.nome)}</div>
    //    </div>
  );
}
