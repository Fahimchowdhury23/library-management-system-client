import React, { use, useState } from "react";
import {
  FaBook,
  FaBookOpen,
  FaHashtag,
  FaRegImage,
  FaRegStickyNote,
  FaStar,
  FaTags,
  FaUser,
} from "react-icons/fa";
import AuthContext from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../Components/Hooks/UseAxiosSecure";
import { useNavigate } from "react-router";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const { user } = use(AuthContext);
  const { displayName, photoURL, email } = user;

  const categories = ["Novel", "Thriller", "History", "Drama", "Sci-Fi"];

  const handleFormAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData.entries());
    setLoading(true);

    const bookData = {
      displayName,
      photoURL,
      email,
      ...newBook,
      quantity: parseInt(newBook.quantity, 10),
      rating: parseFloat(newBook.rating),
    };

    axiosSecure
      .post("/books", bookData)
      .then((res) => {
        if (res.data.insertedId) {
          e.target.reset();
          toast.dismiss();
          toast.success("Book added Successfully!");
          setLoading(false);
          navigate(`/details/${res.data.insertedId}`);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.dismiss();
        toast.error("Something went wrong");
        console.error(error);
      });
  };

  return (
    <section>
      <title>Add a New Book | LibraFlow</title>
      <form
        onSubmit={handleFormAddBook}
        className="w-9/12 mx-auto py-5 flex flex-col gap-3 p-4"
      >
        <p className="w-10/12 mb-3 text-2xl font-semibold mx-auto text-center text-accent">
          Add a New Book
        </p>
        <p className="border-b-2 w-10/12 mx-auto border-accent/70"></p>

        {/* Image URL */}
        <label className="flex items-center gap-2 text-accent/70">
          <FaRegImage size={24} /> Image URL
        </label>
        <input
          type="url"
          name="image"
          required
          placeholder="Book Cover URL"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />

        {/* Title */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaBook size={24} /> Name
        </label>
        <input
          type="text"
          name="title"
          required
          placeholder="Book Title"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />

        {/* Quantity */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaHashtag size={24} /> Quantity
        </label>
        <input
          type="number"
          name="quantity"
          min={0}
          max={10}
          required
          placeholder="Book Quantity"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [appearance:textfield]"
        />

        {/* Author Name */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaUser size={24} /> Author Name
        </label>
        <input
          type="text"
          name="author"
          required
          placeholder="Author Name"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />

        {/* Categories */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaTags size={24} /> Category
        </label>
        <select
          name="category"
          className="px-4 py-3 cursor-pointer rounded-xl bg-white text-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          {categories.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {/* Short Description */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaRegStickyNote size={24} /> Short Description
        </label>
        <textarea
          name="description"
          required
          placeholder="Short description of the book"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent [resize:none]"
          rows={2}
        />

        {/* Rating */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaStar size={24} /> Rating
        </label>
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          placeholder="Rating (1-5)"
          required
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [appearance:textfield]"
        />

        {/* Book Content */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaBookOpen size={24} /> Content
        </label>
        <textarea
          name="content"
          required
          placeholder="Write the book content here"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent [resize:none]"
          rows={4}
        />

        {/* Add Book Button */}

        <button
          type="submit"
          className="w-full btn py-3 rounded-2xl border-none text-lg bg-neutral font-bold transition backdrop-blur-xl"
        >
          {loading ? (
            <span className="loading loading-spinner text-accent"></span>
          ) : (
            "Add Book"
          )}
        </button>
      </form>
    </section>
  );
};

export default AddBook;
