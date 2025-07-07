import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white hover:shadow-2xl shadow-md transition-all duration-300 ease-out rounded-xl overflow-hidden flex flex-col">
      <Link to={`/details/${book._id}`}>
        <img
          src={book.image}
          alt={book.title}
          className="h-50 lg:h-60 w-full hover:scale-105 transition-all duration-500 ease-out object-cover object-top"
        />
      </Link>

      <div className="px-2 mt-1 text-black space-y-1 flex-1">
        <h2 className="text-lg font-bold">
          Title:&nbsp;
          <span className="font-semibold text-accent">{book.title}</span>
        </h2>

        <h3 className="font-semibold">
          Author:&nbsp;
          <span className="text-accent">{book.author}</span>
        </h3>

        <p>
          Category:&nbsp;
          <span className="font-semibold text-accent">{book.category}</span>
        </p>

        <p>
          Quantity:&nbsp;
          <span className="font-semibold text-accent">{book.quantity}</span>
        </p>
      </div>

      <div className="p-2">
        <div className="flex items-center gap-2">
          <img
            src={book.photoURL}
            alt={book.displayName}
            className="w-10 h-10 rounded-full"
          />

          <span className="text-lg font-medium text-accent">
            {book.displayName}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-1 mb-3">
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

        <Link to={`/books/${book._id}`}>
          <button className="btn w-full rounded-xl text-black border-0 font-semibold text-lg bg-accent/70 hover:bg-accent">
            <MdOutlineBrowserUpdated size={24} /> Update Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
