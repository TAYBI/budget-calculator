import React, { useState } from "react";
import "./App.css";
import { Alert } from "./components/Alert";
import { Form } from "./components/Form";
import { List } from "./components/List";
import uuid from "uuid/v4";

const initialState = [
  { id: uuid(), charge: "rent", amount: 1550 },
  { id: uuid(), charge: "car payment", amount: 8000 },
  { id: uuid(), charge: "vreadir card bill", amount: 5550 }
];

function App() {
  const [expenses, setExpenses] = useState(initialState);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>

      <main className="App">
        <Form />
        <List expenses={expenses} />
      </main>

      <h1>
        total spending:
        <span className="total">
          ${expenses.reduce((acc, curr) => (acc += curr.amount), 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
