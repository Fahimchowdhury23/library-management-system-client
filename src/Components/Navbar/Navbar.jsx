import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
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
  };

  return (
    <div className="navbar shadow-sm">
      <div className="flex items-center justify-between mx-10 flex-1">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-12 h-12"
              src="https://i.ibb.co/V021hN4z/logo.png"
              alt="LibraFlow Logo"
            />
          </Link>
          <Link to="/">
            <h1 className="font-semibold text-2xl cursor-pointer">LibraFlow</h1>
          </Link>
        </div>

        <div className="flex text-xl font-medium items-center gap-2">
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

        <div className="flex items-center gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content font-medium bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2 text-lg font-medium">
              <Link to="/auth/login">
                <button className="lg:text-lg btn bg-gradient-to-l from-neutral to-accent rounded-full p-3 lg:p-5 border-none font-semibold">
                  Login
                </button>
              </Link>

              <Link to="/auth/register">
                <button className="lg:text-lg btn bg-gradient-to-l from-neutral to-accent rounded-full p-3 lg:p-5 border-none font-semibold">
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
