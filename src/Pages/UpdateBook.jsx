import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaBook, FaRegImage, FaStar, FaTags, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosSecure from "../Components/Hooks/UseAxiosSecure";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(null);

  const [selectedBook, setSelectedBook] = useState({});
  const categories = ["Novel", "Thriller", "History", "Drama", "Sci-Fi"];

  useEffect(() => {
    axiosSecure.get(`/books/${id}`).then((res) => {
      setSelectedBook(res.data);
    });
  }, [id, axiosSecure]);

  const handleFormUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedBook = Object.fromEntries(formData.entries());
    setLoading(true);

    axiosSecure.put(`/books/${id}`, updatedBook).then((res) => {
      if (res.data.modifiedCount) {
        toast.dismiss();
        toast.success("Book updated successfully!", {
          style: {
            background: "#03a791",
            color: "white",
          },
        });
        setLoading(false);
        navigate(`/details/${id}`);
      } else {
        setLoading(false);
        toast.dismiss();
        toast.error("No changes has been made");
      }
    });
  };

  return (
    <div>
      <title>Update Book Form </title>
      <form
        onSubmit={handleFormUpdateBook}
        className="w-4/6 mx-auto py-5 flex flex-col gap-3 p-4"
      >
        <p className="w-10/12 mb-3 text-2xl font-semibold mx-auto text-center text-accent">
          Update Your Book Here
        </p>
        <p className="border-b-2 w-10/12 mx-auto border-accent/70"></p>

        {/* Image URL */}
        <label className="flex items-center gap-2 text-accent/70">
          <FaRegImage size={24} /> Image URL
        </label>
        <input
          type="url"
          name="image"
          defaultValue={selectedBook.image}
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
          defaultValue={selectedBook.title}
          required
          placeholder="Book Title"
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />

        {/* Author Name */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaUser size={24} /> Author Name
        </label>
        <input
          type="text"
          name="author"
          defaultValue={selectedBook.author}
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
          defaultValue={selectedBook.category}
          className="px-4 py-3 cursor-pointer rounded-xl bg-white text-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          {categories.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {/* Rating */}

        <label className="flex items-center gap-2 text-accent/70">
          <FaStar size={24} /> Rating (mins)
        </label>
        <input
          type="number"
          name="rating"
          defaultValue={selectedBook.rating}
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          required
          className="px-4 py-3 rounded-xl bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [appearance:textfield]"
        />

        {/* Update Book Button */}

        <button
          type="submit"
          className="w-full btn py-3 rounded-2xl border-none text-lg bg-neutral font-bold transition backdrop-blur-xl"
        >
          {loading ? (
            <span className="loading loading-spinner text-accent"></span>
          ) : (
            "Update Book"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
