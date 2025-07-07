import React from "react";
import { Link } from "react-router";

const BookCategory = () => {
  const categories = ["Novel", "Thriller", "Sci-Fi", "Drama", "History"];

  const descriptions = {
    Novel:
      "Stories that transport you to unforgettable worlds and unforgettable lives.",
    Thriller:
      "Pulse-pounding plots packed with suspense and unexpected twists.",
    "Sci-Fi": "Journey through futuristic worlds and bold ideas.",
    Drama: "Emotional narratives exploring human experiences.",
    History: "Uncover the events and people that shaped our world.",
  };

  return (
    <section>
      <div className="pt-4 md:pt-6 lg:pt-8">
        <h2 className="text-center text-lg md:text-2xl lg:text-3xl font-bold text-accent drop-shadow mb-1">
          Book Categories
        </h2>
        <p className="border-b-3 w-1/2 md:w-1/3 lg:w-1/4 mx-auto border-accent/70 mb-1"></p>
      </div>

      <p className="flex justify-center flex-wrap text-xs whitespace-nowrap md:text-xl lg:text-2xl font-bold text-accent drop-shadow mb-4">
        Hop In — Choose the Genre That Sparks Your Curiosity!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full">
        {categories.map((category, idx) => (
          <Link
            className="h-full"
            to={`/category/${category.toLowerCase()}`}
            key={idx}
          >
            <section className="bg-gradient-to-r from-accent to-neutral p-4 flex flex-col rounded-lg">
              <div>
                <h3 className="font-bold text-xl pb-2">{category}</h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p>
                  {descriptions[category] ||
                    `Explore our best ${category} collections.`}
                </p>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BookCategory;
