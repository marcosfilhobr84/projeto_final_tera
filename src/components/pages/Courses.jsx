import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Videos from "../organisms/Videos";
import Sidebar from "../molecules/Sidebar";

export default function Courses() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Videos />
      <Footer />
    </div>
  );
}
