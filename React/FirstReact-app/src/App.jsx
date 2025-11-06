import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  name = "prathmesh";
  return (
    <>
      <div>
        {name}
        <h2>Let's Start</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          fugiat suscipit quibusdam, omnis sit voluptate quas in magni? Corrupti
          non error modi eaque libero expedita voluptatibus ea sint consequatur
          repudiandae.
        </p>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>

        {/* Alternate way to use props
        <ExpesnseItem expense={expenses[0]}></ExpesnseItem> */}
      </div>
    </>
  );
}

export default App;
