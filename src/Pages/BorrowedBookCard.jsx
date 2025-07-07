import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useAxiosSecure from "../Components/Hooks/UseAxiosSecure";
import { Link } from "react-router";

const BorrowedBookCard = ({ setBorrowedBooks, borrowedBooks, book }) => {
  const axiosSecure = useAxiosSecure();
  const [month, day, year] = book.returnDate.split("/");

  const returnDate = `${day}/${month}/${year}`;

  const handleSubmitReturn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#03a791",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // returning the book

        axiosSecure
          .delete(`/borrows/${book._id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              // book quantity increasing

              axiosSecure
                .patch(`/return/${book._id}`)
                .then((res) => {
                  if (res.data.modifiedCount) {
                    const remainingBooks = borrowedBooks.filter(
                      (books) => books._id !== book._id
                    );
                    setBorrowedBooks(remainingBooks);

                    Swal.fire({
                      title: "Returned!",
                      text: `${book.title} has been successfully returned.`,
                      icon: "success",
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error returning book:", error);
                  Swal.fire("Something went wrong");
                });
            }
          })
          .catch((error) => {
            console.error("Error returning book:", error);
            Swal.fire("Something went wrong while returning the book.");
          });
      }
    });
  };

  return (
    <div className="bg-white hover:shadow-2xl transition-all duration-300 ease-out rounded-xl overflow-hidden flex flex-col">
      <Link to={`/details/${book._id}`}>
        <img
          src={book.image}
          alt={book.title}
          className="h-60 lg:h-70 hover:scale-105 transition-all duration-500 ease-out w-full object-top object-cover mb-1"
        />
      </Link>

      <div className="px-2 text-black space-y-2 flex-1">
        <h2 className="text-lg font-bold">
          Title:&nbsp;
          <span className="font-semibold text-accent">{book.title}</span>
        </h2>
        <h3 className="font-semibold">
          Author: &nbsp;
          <span className="text-accent">{book.author}</span>
        </h3>

        <div className="font-medium flex flex-col gap-2">
          <p>
            Category: <strong className="text-accent">{book.category}</strong>
          </p>

          <p>
            Borrowed Date:{" "}
            <strong className="text-accent">{book.borrowedDate}</strong>
          </p>

          <p>
            Return Date: <strong className="text-red-500">{returnDate}</strong>
          </p>
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center gap-1 mb-2">
          <p className="text-black font-medium">Rating:</p>
          <p>
            <Rating
              initialRating={book.rating}
              readonly
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-500" />}
            />
          </p>
        </div>

        <button
          onClick={handleSubmitReturn}
          className="btn text-white w-full rounded-lg font-semibold border-0 text-lg bg-red-500 hover:bg-red-600"
        >
          Return This Book
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
