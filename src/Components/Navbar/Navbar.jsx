import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const clickedTheme = localStorage.getItem("theme");

    clickedTheme && setTheme(clickedTheme); // in one line
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03a791",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        // Signing Out

        signOutUser()
          .then(() => {
            toast.dismiss();
            toast.success("You've logged out successfully!", {
              className: "text-center",
            });
            navigate("/auth/login");
          })
          .catch((error) => {
            toast.dismiss();
            toast.error("Something went wrong", error?.message);
          });
      }
    });
  };

  return (
    <div className="navbar bg-secondary fixed top-0 z-50 shadow-md">
      <div className="flex items-center justify-between lg:justify-around flex-1">
        <div
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="dropdown dropdown-start lg:hidden"
        >
          <div
            ref={menuRef}
            tabIndex={0}
            role="button"
            className="btn border-0 btn-accent"
          >
            {isMenuOpen ? <RxCross1 size={22} /> : <HiMenuAlt1 size={22} />}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gradient-to-b from-primary to-neutral rounded-box z-1 w-50 md:w-60 text-lg md:text-xl p-2 md:p-4 shadow-sm"
          >
            <div className="flex flex-col whitespace-nowrap font-medium md:gap-1">
              <NavLink
                onClick={() => {
                  menuRef.current?.focus();
                  menuRef.current?.blur();
                }}
                className="nav-link hover:bg-neutral"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  menuRef.current?.focus();
                  menuRef.current?.blur();
                }}
                className="nav-link hover:bg-neutral"
                to="/allBooks"
              >
                All Books
              </NavLink>

              <NavLink
                onClick={() => {
                  menuRef.current?.focus();
                  menuRef.current?.blur();
                }}
                className="nav-link hover:bg-neutral"
                to="/addBook"
              >
                Add Book
              </NavLink>
              <NavLink
                onClick={() => {
                  menuRef.current?.focus();
                  menuRef.current?.blur();
                }}
                className="nav-link hover:bg-neutral"
                to="/borrowedBooks"
              >
                Borrowed Books
              </NavLink>
              {!user && (
                <NavLink
                  onClick={() => {
                    menuRef.current?.focus();
                    menuRef.current?.blur();
                  }}
                  className="nav-link hover:bg-neutral"
                  to="/auth/login"
                >
                  <button>Login</button>
                </NavLink>
              )}
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <Link to="/">
            <img
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer"
              src="https://i.ibb.co/V021hN4z/logo.png"
              alt="LibraFlow Logo"
            />
          </Link>
          <Link to="/">
            <h1 className="font-semibold text-xl md:text-3xl cursor-pointer text-accent">
              LibraFlow
            </h1>
          </Link>
        </div>

        {/* For Large Devices */}

        <div className="hidden lg:grid grid-flow-col gap-0 whitespace-nowrap lg:text-xl text-accent font-medium">
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
        </div>

        <div className="flex items-center gap-1 lg:gap-2">
          <button
            className="cursor-pointer hover:bg-neutral/60 rounded-full p-0.5 md:p-1"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <div>
                {/* sun icon */}

                <svg
                  className="swap-on text-accent w-8 h-8 md:w-10 md:h-10 fill-current transition-all duration-500 transform rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </div>
            ) : (
              <div>
                {/* moon icon */}

                <svg
                  className="swap-off text-accent w-8 h-8 md:w-10 md:h-10 fill-current transition-all duration-500 transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </div>
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div className="p-1 md:p-1.25 hover:bg-neutral rounded-full">
                <div
                  tabIndex={0}
                  ref={profileRef}
                  role="button"
                  className="btn btn-ghost btn-circle avatar avatar-online"
                >
                  <div className="w-10 rounded-full">
                    <img alt={user?.displayName} src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content font-medium md:text-lg bg-gradient-to-t from-primary via-neutral to-accent rounded-box z-1 mt-2 w-52 p-2 shadow"
              >
                <li>
                  <a
                    className="hover:bg-primary hover:text-accent active:!text-accent cursor-pointer focus:!outline-none active:!bg-primary"
                    onClick={() => {
                      profileRef.current?.focus();
                      profileRef.current?.blur();
                      navigate("/borrowedBooks");
                    }}
                  >
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-primary hover:text-accent active:!text-accent cursor-pointer focus:!outline-none active:!bg-primary"
                    onClick={handleSignOut}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login">
                <button className="hidden md:flex lg:text-lg btn bg-gradient-to-r from-neutral to-accent rounded-lg p-3 md:p-4 lg:p-5 border-none font-semibold">
                  Login
                </button>
              </Link>

              <Link to="/auth/register">
                <button className="hidden md:flex lg:text-lg btn bg-gradient-to-l from-neutral to-accent rounded-lg p-3 md:p-4 lg:p-5 border-none font-semibold">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
