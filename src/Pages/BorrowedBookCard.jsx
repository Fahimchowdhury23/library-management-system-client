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
    <div className="bg-white rounded-2xl p-3 shadow-md overflow-hidden flex flex-col">
      <Link to={`/details/${book._id}`}>
        <img
          src={book.image}
          alt={book.title}
          className="h-60 cursor-pointer w-full rounded-2xl object-cover"
        />
      </Link>

      <div className="p-2 space-y-2 flex-1">
        <h2 className="text-xl font-semibold">
          Title:&nbsp;
          <span className=" font-semibold text-accent ">{book.title}</span>
        </h2>
        <h3 className="text-lg font-semibold">
          Author: &nbsp;
          <span className=" font-semibold text-accent ">{book.author}</span>
        </h3>

        <div className="text-md font-medium flex flex-col gap-2">
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

      <div>
        <div className="flex items-center pl-2 gap-1 mt-2 mb-3">
          <p className=" font-semibold">Rating:</p>
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
          className="btn text-white w-full rounded-xl font-semibold text-lg bg-red-500 "
        >
          Return This Book
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
