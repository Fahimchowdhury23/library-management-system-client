import React, { use, useEffect, useState } from "react";
import BorrowedBookCard from "./BorrowedBookCard";
// import axios from "axios";
import AuthContext from "../Contexts/AuthContext";
import useAxiosSecure from "../Components/Hooks/UseAxiosSecure";

const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/borrows?email=${user.email}`)
      .then((res) => setBorrowedBooks(res.data));
  }, [user, axiosSecure]);

  return (
    <section className="min-h-screen">
      <title>My Borrowed Books | LibraFlow</title>
      <div>
        <p className="mb-1 pt-2 md:pt-3 lg:pt-5 text-xl md:text-2xl lg:text-3xl font-semibold text-center text-accent">
          My Borrowed Books
        </p>
        <p className="border-b-3 w-2/3 md:w-1/3 mx-auto border-accent/70"></p>
      </div>

      {borrowedBooks.length === 0 ? (
        <div className="mt-28 min-h-screen">
          <p className="mb-3 text-xl md:text-2xl lg:text-3xl font-semibold text-center text-accent">
            You haven't borrowed any book yet !
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 md:py-4 lg:py-6 w-full  lg:w-11/12 mx-auto">
            {borrowedBooks.map((book) => (
              <BorrowedBookCard
                key={book._id}
                setBorrowedBooks={setBorrowedBooks}
                borrowedBooks={borrowedBooks}
                book={book}
              ></BorrowedBookCard>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default BorrowedBooks;
