import React from "react";

const BookTable = ({ book, index }) => {
  return (
    <tr key={book._id}>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src={
                book.image || book.photoURL || "https://via.placeholder.com/48"
              }
              alt={book.title}
            />
          </div>
        </div>
      </td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.quantity}</td>
      <td>{book.rating}</td>
    </tr>
  );
};

export default BookTable;
