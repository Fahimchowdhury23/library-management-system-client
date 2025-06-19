import React from "react";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const BookTable = ({ book, index }) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/details/${book._id}`)}
      className="font-semibold text-accent text-lg"
      key={book._id}
    >
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-20 h-20">
            <img src={book.image} alt={book.title} />
          </div>
        </div>
      </td>

      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.quantity}</td>
      <td>{book.rating}</td>
      <td className="cursor-auto">
        <div className="flex justify-center items-center">
          <Link to={`/books/${book._id}`}>
            <button className="cursor-pointer">
              <MdOutlineBrowserUpdated size={30} />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default BookTable;
