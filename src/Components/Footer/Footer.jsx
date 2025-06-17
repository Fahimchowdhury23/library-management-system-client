import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-b from-neutral to-primary rounded p-8">
      <div className="flex items-center gap-1">
        <Link to="/">
          <img
            className="w-12 h-12"
            src="https://i.ibb.co/V021hN4z/logo.png"
            alt="LibraFlow Logo"
          />
        </Link>
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">LibraFlow</h1>
        </Link>
      </div>
      <nav className="grid grid-flow-col text-xl font-medium gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="flex gap-5">
          <a
            href="https://github.com/Fahimchowdhury23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="cursor-pointer hover:text-[rgb(80,80,80)]"
              size={30}
            />
          </a>
          <a
            href="https://discord.com/users/879041544181649500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              className="cursor-pointer hover:text-[rgb(88,101,242)]"
              size={30}
            />
          </a>
          <a
            href="https://www.facebook.com/fahimchowdhury23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className="cursor-pointer hover:text-blue-600"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              className="cursor-pointer hover:text-red-600"
              size={30}
            />
          </a>
        </div>
      </nav>

      <aside>
        <p className="text-lg">
          Copyright © {new Date().getFullYear()} - All right reserved by
          LibraFlow Inc.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
