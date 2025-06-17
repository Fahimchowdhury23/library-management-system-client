import React from "react";
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
        <h2 className="text-xl text-accent font-semibold">{book.title}</h2>
        <p className="text-md">Category: {book.category}</p>
        <p className="text-md ">
          Quantity:{" "}
          <span className=" font-semibold text-green-600">{book.quantity}</span>
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-4">
          <img
            src={book.photoURL}
            alt={book.displayName}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-medium text-accent">
            By {book.displayName}
          </span>
        </div>
        <p className="mt-2 flex pb-2 text-yellow-600 font-semibold">
          Rating: {book.rating}
        </p>
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
