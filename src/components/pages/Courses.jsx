import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Videos from "../organisms/Videos";
import Sidebar from "../molecules/Sidebar";

export default function Courses() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <Videos />
        </div>
      </div>
      <Footer />
    </div>
  );
}
