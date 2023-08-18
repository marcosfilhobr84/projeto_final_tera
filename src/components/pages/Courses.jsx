import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Videos from "../organisms/Videos";
import Sidebar from "../molecules/Sidebar";
import { useParams } from "react-router-dom";

export default function Courses() {
  let { playlist } = useParams();
  //https://ateliware.com/blog/react-router
  //https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
  // console.log(playlist);
  return (
    <div>
      <Header />
      <div className="grid xl:grid-cols-8 gap-">
        <aside className=" col-span-1">
          {" "}
          {/*hidden invisible xl:visible*/}
          <Sidebar />
        </aside>
        <div className="xl:col-span-7">
          <Videos nome={playlist} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
