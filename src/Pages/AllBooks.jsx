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
    return localStorage.getItem("viewMode") || "table";
  });
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const filteredBooks = showAvailableOnly
    ? bookData.filter((book) => book.quantity > 0)
    : bookData;

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else if (sortOrder === "desc") {
      return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    }
    return 0;
  });

  return (
    <section className="min-h-screen">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          background: "linear-gradient(to right, #00f6ff, #03a791, #00f6ff)",
          borderRadius: "0 6px 6px 0",
          boxShadow: "0 0 10px #03a79188",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <title>All Books | LibraFlow</title>
      <h1 className="text-center pt-2 md:pt-4 text-xl md:text-2xl lg:text-3xl font-bold text-accent drop-shadow mb-1">
        All Books
      </h1>
      <p className="border-b-3 w-1/3 md:w-1/5 mx-auto border-accent/70 mb-2 md:mb-3"></p>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:mb-5">
        <div className="text-center mb-2 md:mb-0">
          <button
            className="btn bg-accent text-white"
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
          >
            {showAvailableOnly ? "Show All Books" : "Show Available Books"}
          </button>
        </div>

        <div className="flex gap-5">
          {/* Dropdown for view mode */}
          <div className="flex justify-center items-center gap-1 lg:gap-2">
            <p className="md:text-lg whitespace-nowrap font-semibold text-accent">
              View Mode :
            </p>
            <select
              className="p-1 px-2 bg-white text-accent focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer rounded-lg font-medium"
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
            >
              <option className="bg-primary text-accent" value="table">
                Table
              </option>
              <option className="bg-primary text-accent" value="card">
                Card
              </option>
            </select>
          </div>
          {/* Sorting by Title */}

          <div className="flex justify-center items-center gap-1 lg:gap-2">
            <div>
              <p className="md:text-lg whitespace-nowrap font-semibold text-accent">
                Sort By Title :
              </p>
            </div>

            <div>
              <select
                name="sorting"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="p-1 px-2 cursor-pointer rounded-lg bg-white text-accent focus:outline-none focus:ring-1 focus:ring-accent font-medium"
              >
                <option className="bg-primary" value="none">
                  Default
                </option>

                <option className="bg-primary" value="asc">
                  A to Z
                </option>

                <option className="bg-primary" value="desc">
                  Z to A
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {!sortedBooks && (
        <h2 className="text-center text-2xl font-bold text-accent drop-shadow">
          There is no book added yet!
        </h2>
      )}

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 pb-8 w-full">
          {sortedBooks.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <>
          <table className="text-center mb-10 border-y-2 border-accent table table-zebra w-full">
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
            <tbody className="w-full cursor-pointer ">
              {sortedBooks.map((book, index) => (
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
