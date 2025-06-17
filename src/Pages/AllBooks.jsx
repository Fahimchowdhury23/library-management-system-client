import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "./BookCard";
import BookTable from "./BookTable";

const AllBooks = () => {
  const bookData = useLoaderData();

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");

  const filteredBooks = showAvailableOnly
    ? bookData.filter((book) => book.quantity > 0)
    : bookData;

  return (
    <section>
      <title>All Books | LibraFlow</title>
      <h2 className="text-center pt-8 text-3xl font-bold text-accent drop-shadow mb-2">
        All Books
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-accent/70 mb-6"></p>

      <div className="text-center mb-6">
        <button
          className="btn bg-accent text-white"
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        >
          {showAvailableOnly ? "Show All Books" : "Show Available Books"}
        </button>
      </div>

      {/* Dropdown for view mode */}
      <div className="w-40 mx-auto mb-6">
        <select
          className="select font-semibold text-accent select-bordered w-full"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredBooks.map((book, index) => (
                <BookTable key={book._id} index={index} book={book}></BookTable>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default AllBooks;
