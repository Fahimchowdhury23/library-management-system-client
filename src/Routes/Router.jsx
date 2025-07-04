import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import AuthenticationLayout from "../Layout/AuthenticationLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Spinner from "../Components/Spinner/Spinner";
import axios from "axios";
import UpdateBook from "../Pages/UpdateBook";
import CategoryCard from "../Pages/BookCategory/CategoryCard";
import BookDetails from "../Pages/BookCategory/BookDetails";

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
        loader: () =>
          axios
            .get(
              "https://library-management-system-server-two.vercel.app/books"
            )
            .then((res) => res.data),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "books/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
      {
        path: "category/:category",
        element: <CategoryCard></CategoryCard>,
        loader: ({ params }) =>
          axios
            .get(
              `https://library-management-system-server-two.vercel.app/books?category=${params.category}`
            )
            .then((res) => res.data),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
