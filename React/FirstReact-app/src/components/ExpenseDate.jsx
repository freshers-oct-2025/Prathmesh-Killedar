import "./ExpenseDate.css"

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <>
      <div className="expense-date">
        <div className="ed-month">{month}</div>
        <div className="ed-day">{day}</div>
        <div className="ed-year">{year}</div>
      </div>
    </>
  );
}

export default ExpenseDate;
