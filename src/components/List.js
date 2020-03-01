import React from "react";
import { Item } from "./Item";
import { MdDelete } from "react-icons/md";

export const List = ({ expenses, handleClear, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => (
          <Item
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>

      {expenses.length > 0 && (
        <button className="btn" onClick={handleClear}>
          Clear expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};
