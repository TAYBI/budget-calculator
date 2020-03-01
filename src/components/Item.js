import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const Item = ({ expense: { id, charge, amount } }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button className="clear-btn">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
