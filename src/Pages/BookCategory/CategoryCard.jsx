import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router";

const CategoryCard = () => {
  const books = useLoaderData();
  const { category } = useParams();

  const categoryReal = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="w-11/12 mx-auto py-12">
      <title>Category Books | LibraFlow</title>
      <h1 className="text-2xl font-bold text-center text-accent mb-2">
        {categoryReal} Books
      </h1>

      <p className="border-b-3 w-1/5 mx-auto border-accent/70 mb-3"></p>

      {!books && (
        <h2 className="text-center text-2xl font-semibold min-h-screen pt-40 text-accent drop-shadow">
          There is no {categoryReal} book added yet! <br />
          Sorry for the inconvenience.
        </h2>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-2xl p-3 shadow-md overflow-hidden flex flex-col"
          >
            <Link to={`/details/${book._id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="h-60 w-full rounded-2xl object-cover"
              />
            </Link>

            <div className="p-2 space-y-2 flex-1">
              <h2 className="text-xl font-semibold">
                Title:&nbsp;
                <span className=" font-semibold text-accent ">
                  {book.title}
                </span>
              </h2>

              <h3 className="text-lg font-semibold">
                Author: &nbsp;
                <span className=" font-semibold text-accent ">
                  {book.author}
                </span>
              </h3>

              <p className="text-md">Category: {book.category}</p>

              <p className="text-md ">
                Quantity:
                <span className=" font-semibold text-green-600">
                  {book.quantity}
                </span>
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
            </div>

            <Link to={`/details/${book._id}`}>
              <button className="btn w-full rounded-xl font-semibold text-lg bg-accent">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
