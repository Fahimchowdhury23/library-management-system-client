import React from "react";
import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const AllBooks = () => {
  const bookData = useLoaderData();

  return (
    <section>
      <title>All Books | LibraFlow</title>
      <h2 className="text-center pt-8 text-3xl font-bold text-accent drop-shadow mb-2">
        All Books
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-accent/70 mb-6"></p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
        {bookData.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
