import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const AuthenticationLayout = () => {
  return (
    <section className="bg-primary min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ScrollToTop></ScrollToTop>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default AuthenticationLayout;
