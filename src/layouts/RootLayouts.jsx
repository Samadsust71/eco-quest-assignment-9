import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import useDynamicTitle from "../dynamicTitleHook/useDynamicTitle";
import Modal from "../components/Modal";

const RootLayouts = () => {
  useDynamicTitle()
  return (
    <div className="font-lato ">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-100 via-sky-200 to-blue-100">
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-292px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Modal/>
    </div>
  );
};

export default RootLayouts;
