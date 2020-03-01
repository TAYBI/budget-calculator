import React from "react";
import { MdSend } from "react-icons/md";

export const Form = ({
  handleSubmit,
  handleAmount,
  handleCharge,
  charge,
  amount,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="from-group">
          <label htmlFor="charge">charge</label>
          <input
            name="charge"
            type="text"
            className="form-control"
            id="charge"
            value={charge}
            placeholder="e.g. rent"
            onChange={handleCharge}
          ></input>
        </div>
        <div className="from-group">
          <label htmlFor="amount">amount</label>
          <input
            name="amount"
            type="number"
            value={amount}
            className="form-control"
            id="amount"
            placeholder="e.g. 100"
            onChange={handleAmount}
          ></input>
        </div>
      </div>

      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"} <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
