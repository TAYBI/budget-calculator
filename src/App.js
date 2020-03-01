import React, { useState, useEffect } from "react";
import "./App.css";
import { Alert } from "./components/Alert";
import { Form } from "./components/Form";
import { List } from "./components/List";
import uuid from "uuid/v4";

// const initialState = [
//   { id: uuid(), charge: "rent", amount: 1550 },
//   { id: uuid(), charge: "car payment", amount: 8000 },
//   { id: uuid(), charge: "vreadir card bill", amount: 5550 }
// ];

const initialState = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialState);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => localStorage.setItem("expenses", JSON.stringify(expenses)), [
    expenses
  ]);

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false }), 2000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (amount > 0 && charge !== "") {
      if (edit) {
        const exspenseTemp = expenses.map(expense =>
          expense.id === id ? { ...expense, charge, amount } : expense
        );
        setExpenses(exspenseTemp);
      } else {
        const Expense = { id: uuid(), charge, amount };
        setExpenses([...expenses, Expense]);
        handleAlert({ type: "success", text: "Item added" });
      }
      setAmount("");
      setCharge("");
    } else handleAlert({ type: "danger", text: "Somethings has been wrong" });
  };

  const handleClear = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "List has been cleared" });
  };

  const handleDelete = id => {
    const exspenseTemp = expenses.filter(expense => expense.id !== id);
    setExpenses(exspenseTemp);
    handleAlert({ type: "danger", text: "Item deleted" });
  };

  const handleEdit = id => {
    const exspenseTemp = expenses.find(expense => expense.id === id);
    const { charge, amount } = exspenseTemp;
    setAmount(amount);
    setCharge(charge);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget Calculator</h1>

      <main className="App">
        <Form
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleClear={handleClear}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>

      <h1>
        total spending:
        <span className="total">
          ${expenses.reduce((acc, curr) => (acc += parseInt(curr.amount)), 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
