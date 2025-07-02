import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "./BookCard";
import BookTable from "./BookTable";
import { motion, useScroll } from "motion/react";

const AllBooks = () => {
  const bookData = useLoaderData();
  const { scrollYProgress } = useScroll();

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "card";
  });

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const filteredBooks = showAvailableOnly
    ? bookData.filter((book) => book.quantity > 0)
    : bookData;

  return (
    <section>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: "linear-gradient(to right, #00f6ff, #03a791, #00f6ff)",
          borderRadius: "0 6px 6px 0",
          boxShadow: "0 0 10px #03a79188",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <title>All Books | LibraFlow</title>
      <h1 className="text-center pt-8 text-3xl font-bold text-accent drop-shadow mb-2">
        All Books
      </h1>
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
          className="select cursor-pointer font-semibold text-accent select-bordered w-full"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {!filteredBooks && (
        <h2 className="text-center text-2xl font-bold text-accent drop-shadow mb-2">
          There is no book added yet!
        </h2>
      )}

      {viewMode === "card" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <>
          <table className="cursor-pointer text-center mb-10 border-y-2 border-accent table table-zebra w-full">
            <thead>
              <tr className="text-lg">
                <th>No.</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Update Books</th>
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
