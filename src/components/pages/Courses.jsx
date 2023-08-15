import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Videos from "../organisms/Videos";
import Sidebar from "../molecules/Sidebar";

export default function Courses() {
  return (
    <div>
      <Header />
      <div className="grid xl:grid-cols-8 gap-">
        <aside className="invisible sticky col-span-1 xl:visible">
          <Sidebar />
        </aside>
        <div className="xl:col-span-7">
          <Videos />
        </div>
      </div>
      <Footer />
    </div>
  );
}
