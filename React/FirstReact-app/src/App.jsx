import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";

import Form from "./components/Form";

const dummy_expenses = [
  {
    title: "New phone",
    amount: 12000,
    date: new Date(2024, 7, 25),
  },
  {
    title: "New Car",
    amount: 50000,
    date: new Date(2025, 10, 5),
  },
];

function App(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <div>
        {/* {name}
        <h2>Let's Start</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          fugiat suscipit quibusdam, omnis sit voluptate quas in magni? Corrupti
          non error modi eaque libero expedita voluptatibus ea sint consequatur
          repudiandae.
        </p> */}

        {/* <Form></Form> */}

        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangeHandler}
        ></ExpensesFilter>

        {/* Alternate way to use props
        <ExpesnseItem expense={expenses[0]}></ExpesnseItem> */}
      </div>
    </>
  );
}

export default App;
