import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-292px)] w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayouts;
