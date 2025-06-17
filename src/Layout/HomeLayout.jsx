import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <section className="bg-primary min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <ScrollToTop></ScrollToTop>
        {state === "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default HomeLayout;
