import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
