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
    <section>
      <title>My Borrowed Books | LibraFlow</title>
      <div className="py-8">
        <p className="w-10/12 mb-3 text-3xl font-semibold mx-auto text-center text-accent">
          My Borrowed Books
        </p>
        <p className="border-b-3 w-3/8 mx-auto border-accent/70"></p>
      </div>

      {borrowedBooks.length === 0 ? (
        <div className="mt-28 min-h-screen">
          <p className="w-10/12 mb-3 text-3xl font-semibold mx-auto text-center text-accent">
            You haven't borrowed any book yet !
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
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
