import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Login from "../organisms/Login";

export default function () {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}
