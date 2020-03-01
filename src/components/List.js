import React from "react";
import { Item } from "./Item";
import { MdDelete } from "react-icons/md";

export const List = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => (
          <Item key={expense.id} expense={expense} />
        ))}
      </ul>

      {expenses.length > 0 && (
        <button className="btn">
          Clear expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
