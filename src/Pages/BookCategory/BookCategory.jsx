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
      <h2 className="text-center pt-20 text-3xl font-bold text-accent drop-shadow mb-2">
        Book Categories
      </h2>
      <p className="border-b-3 w-1/3 mx-auto border-accent/70 mb-4"></p>

      <p className="text-center text-2xl font-bold text-accent drop-shadow mb-4">
        Hop In — Choose the Genre That Sparks Your Curiosity!
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 w-10/12 mx-auto">
        {categories.map((category, idx) => (
          <Link to={`/category/${category.toLowerCase()}`} key={idx}>
            <div className="bg-gradient-to-r from-accent to-neutral p-4 rounded-lg">
              <h3 className="font-bold text-xl">{category}</h3>
              <p className="pt-3">
                {descriptions[category] ||
                  `Explore our best ${category} collections.`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BookCategory;
