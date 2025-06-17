import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-md overflow-hidden flex flex-col">
      <img
        src={book.image}
        alt={book.title}
        className="h-60 w-full rounded-2xl object-cover"
      />
      <div className="p-2 space-y-2 flex-1">
        <h2 className="text-xl font-semibold">
          Title:&nbsp;
          <span className=" font-semibold text-accent ">{book.title}</span>
        </h2>

        <h3 className="text-lg font-semibold">
          Author: &nbsp;
          <span className=" font-semibold text-accent ">{book.author}</span>
        </h3>

        <p className="text-md">Category: {book.category}</p>

        <p className="text-md ">
          Quantity:
          <span className=" font-semibold text-green-600">{book.quantity}</span>
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mt-4">
          <img
            sr
            c={book.photoURL}
            alt={book.displayName}
            className="w-10 h-10 rounded-full"
          />

          <span className="text-lg font-medium text-accent">
            Added By {book.displayName}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-2 mb-3">
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

        <Link to={`/books/${book._id}`}>
          <button className="btn w-full rounded-xl font-semibold text-lg bg-accent">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
