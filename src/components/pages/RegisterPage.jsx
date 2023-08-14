import React from "react";
import Header from "../organisms/Header";
import Register from "../organisms/Register";
import Footer from "../organisms/Footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}
