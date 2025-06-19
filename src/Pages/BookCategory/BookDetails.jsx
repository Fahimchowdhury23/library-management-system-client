import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import {
  FaCalendar,
  FaRegCircleUser,
  FaRegStar,
  FaStar,
  FaXmark,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Rating from "react-rating";
import useAxiosSecure from "../../Components/Hooks/UseAxiosSecure";

const BookDetails = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState({});
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [quantity, setQuantity] = useState(bookDetails?.quantity);
  const [loading, setLoading] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = use(AuthContext);

  useEffect(() => {
    axiosSecure.get(`/books/${id}`).then((res) => {
      setBookDetails(res.data);
      setQuantity(res.data.quantity);
    });
  }, [id, axiosSecure]);

  const handleFormBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const borrowedBook = Object.fromEntries(formData.entries());
    setLoading(true);

    const borrowersData = {
      borrowerEmail: borrowedBook.email,
      borrowerUserName: borrowedBook.name,
      borrowedDate: new Date().toLocaleDateString(),
      ...borrowedBook,
      ...bookDetails,
    };

    axiosSecure
      .post(`/borrows?email=${user?.email}`, borrowersData)
      .then((res) => {
        if (res.data.insertedId) {
          e.target.reset();
          setBorrowedBooks([...borrowedBooks, { _id: id }]);

          axiosSecure
            .patch(`/borrow/${id}`)
            .then((res) => {
              setQuantity(quantity - 1);
              if (res.data.modifiedCount) {
                setLoading(false);
                toast.dismiss();
                toast.success(
                  `${bookDetails.title} added to your borrowed list`
                );
                navigate("/borrowedBooks");
              }
            })
            .catch((error) => {
              setLoading(false);
              console.error(error);
              toast.dismiss();
              toast.error("Something went wrong");
            });
        }
      })
      .catch((error) => {
        if (error.status === 460) {
          setLoading(false);
          toast.dismiss();
          return toast("You can't borrow more than 3 books", {
            icon: "⚠️",
          });
        } else {
          setLoading(false);
          toast.dismiss();
          return toast.error("An unexpected error occurred");
        }
      });

    document.getElementById("my_modal_5").close();
  };

  useEffect(() => {
    axiosSecure.get(`/borrows?email=${user.email}`).then((res) => {
      setBorrowedBooks(res.data);
    });
  }, [axiosSecure, user]);

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-tr from-accent to-white rounded-xl shadow-md p-8 my-10">
      <title>Book Details Page | LibraFlow</title>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={bookDetails.image}
          alt={bookDetails.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl font-bold text-accent mb-3">
              {bookDetails.title}
            </h1>

            <p className="text-lg font-semibold mb-1">
              Author: {bookDetails.author}
            </p>

            <p className="text-md font-medium mb-2">
              Category:{" "}
              <strong className="text-accent">{bookDetails.category}</strong>
            </p>

            <p className="text-gray-700 font-medium mb-2">
              Short Description:{" "}
              <span className="font-normal">{bookDetails.description}</span>
            </p>

            <p className="text-gray-700 font-medium whitespace-pre-line mb-1">
              Book Content:
            </p>

            <p className="mb-2">{bookDetails.content}</p>
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-1">Quantity: {quantity}</p>
            <p className=" font-semibold">Rating:</p>
            <p>
              <Rating
                initialRating={bookDetails.rating}
                readonly
                emptySymbol={<FaRegStar className="text-yellow-400" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
            </p>
          </div>

          {/* Borrow Modal */}

          <button
            className={`btn border-none w-24 py-1 mt-4 rounded
             ${
               quantity === 0
                 ? "btn-disabled cursor-not-allowed"
                 : "bg-primary/50 hover:bg-primary/20 cursor-pointer"
             }`}
            onClick={() => {
              const alreadyBorrowed = borrowedBooks.find(
                (book) => book._id === id
              );

              if (alreadyBorrowed) {
                toast.dismiss();
                return toast.error("You already borrowed this book.");
              }

              document.getElementById("my_modal_5").showModal();
            }}
          >
            {loading ? (
              <span className="loading loading-spinner text-accent"></span>
            ) : (
              "Borrow"
            )}
          </button>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box border-2 border-accent/70 rounded-2xl">
              <p
                onClick={closeModal}
                className="flex justify-end cursor-pointer text-accent/70 relative"
              >
                <span className="hover:bg-accent/20 left-[438.5px] w-6 -top-[2.6px] rounded-full absolute">
                  {"\u00A0\u00A0\u00A0"}
                </span>
                <FaXmark className="hover:rounded-full" size={20} />
              </p>
              <div className="modal-action">
                <form
                  onSubmit={handleFormBorrow}
                  className="w-full flex flex-col gap-2" // full width for modal
                >
                  <p className="text-xl font-semibold text-center text-accent/70">
                    Borrow This Book
                  </p>
                  <p className="border-b-2 mb-4 border-accent/70"></p>

                  <div className="text-center z-10">
                    <label className="mb-2 font-medium flex justify-center items-center gap-2 text-accent/70">
                      <FaCalendar size={24} /> Return Date:
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      required
                      placeholderText="Select a date"
                      name="returnDate"
                      className="border w-full focus:outline-none focus:ring-1 focus:ring-accent pl-4 mb-3 py-2 cursor-pointer placeholder-accent text-accent rounded-xl"
                    />
                  </div>

                  {/* Username*/}

                  <label className="flex items-center gap-2 text-accent/70">
                    <FaRegCircleUser size={24} />
                    Username
                  </label>

                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    required
                    className="pl-3 mb-3 py-2 rounded-xl w-full border border-accent bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your Full Name"
                  />

                  {/* Email Address */}

                  <label className="flex items-center gap-2 text-accent/70">
                    <HiOutlineMail size={24} />
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    defaultValue={user?.email}
                    readOnly
                    required
                    className="pl-3 mb-3 py-2 rounded-xl w-full border border-accent bg-white text-accent placeholder-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Email address"
                  />

                  <button
                    type="submit"
                    className="w-full btn py-3 rounded-2xl border-none text-lg bg-accent  font-medium transition backdrop-blur-xl"
                  >
                    Borrow Book
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
