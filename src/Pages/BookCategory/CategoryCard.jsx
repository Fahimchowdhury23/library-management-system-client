import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router";

const CategoryCard = () => {
  const books = useLoaderData();
  const { category } = useParams();

  const categoryReal = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="pt-2 md:pt-4 min-h-screen">
      <title>Category Books | LibraFlow</title>
      <h1 className="text-xl md:text-2xl font-bold text-center text-accent mb-1">
        {categoryReal} Books
      </h1>

      <p className="border-b-3 w-1/2 md:w-1/3 lg:w-1/5 mx-auto border-accent/70 mb-3 md:mb-5"></p>

      {/* If there is no books */}

      {!books && (
        <h2 className="text-center flex flex-wrap justify-center text-xl md:text-2xl font-semibold min-h-screen pt-40 text-accent drop-shadow">
          There is no {categoryReal} book added yet! <br />
          Sorry for the inconvenience.
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 w-full">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-xl hover:shadow-2xl shadow-md transition-all duration-300 ease-out overflow-hidden flex flex-col"
          >
            <Link to={`/details/${book._id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="h-55 lg:h-70 w-full hover:scale-105 transition-all duration-500 ease-out object-cover object-top mb-1"
              />
            </Link>

            <div className="px-2 mt-1 text-black space-y-1 flex-1">
              <h2 className="text-lg font-bold">
                Title:&nbsp;
                <span className="font-semibold text-accent ">{book.title}</span>
              </h2>

              <h3 className="font-semibold">
                Author: &nbsp;
                <span className="text-accent">{book.author}</span>
              </h3>

              <p>
                Category:{" "}
                <span className="font-semibold text-accent">
                  {book.category}
                </span>
              </p>

              <p>
                Quantity:
                <span className="font-semibold text-accent">
                  {book.quantity}
                </span>
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
              <div className="flex items-center gap-1 mt-2 mb-3">
                <p className="text-black font-semibold">Rating:</p>
                <p>
                  <Rating
                    initialRating={book.rating}
                    readonly
                    emptySymbol={<FaRegStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </p>
              </div>

              <Link to={`/details/${book._id}`}>
                <button className="btn w-full rounded-xl text-black border-0 font-semibold text-lg bg-accent/70 hover:bg-accent">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
