import React from "react";
import { MdSend } from "react-icons/md";

export const Form = () => {
  return (
    <form>
      <div className="form-center">
        <div className="from-group">
          <label htmlFor="charge">charge</label>
          <input
            name="charge"
            type="text"
            className="form-control"
            id="charge"
            placeholder="e.g. rent"
          ></input>
        </div>
        <div className="from-group">
          <label htmlFor="amount">amount</label>
          <input
            name="amount"
            type="text"
            className="form-control"
            id="amount"
            placeholder="e.g. 100"
          ></input>
        </div>
      </div>

      <button type="submit" className="btn">
        Submit <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
