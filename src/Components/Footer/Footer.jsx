import React from "react";
import { FaDiscord, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-b from-neutral to-primary rounded gap-3 lg:gap-4 footer-center p-3 md:p-4 lg:p-8">
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/V021hN4z/logo.png"
            alt="LibraFlow Logo"
          />
        </Link>
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
            LibraFlow
          </h1>
        </Link>
      </div>

      <nav className="grid grid-flow-col gap-0 whitespace-nowrap md:text-lg text-accent font-medium">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/allBooks">
          All Books
        </NavLink>
        <NavLink className="nav-link" to="/addBook">
          Add Book
        </NavLink>
        <NavLink className="nav-link" to="/borrowedBooks">
          Borrowed Books
        </NavLink>
      </nav>

      <nav>
        <div className="flex gap-4">
          <a
            href="https://github.com/Fahimchowdhury23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer text-2xl md:text-3xl hover:text-[rgb(80,80,80)]" />
          </a>

          <a
            href="https://www.facebook.com/fahimchowdhury23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-2xl md:text-3xl hover:text-blue-700" />
          </a>

          <a
            href="https://discord.com/users/879041544181649500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="cursor-pointer text-2xl md:text-3xl hover:text-[rgb(88,101,242)]" />
          </a>
        </div>
      </nav>

      <aside>
        <p className="md:text-lg text-accent pb-3 lg:pb-0">
          Copyright © {new Date().getFullYear()} - LibraFlow | All rights
          reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
