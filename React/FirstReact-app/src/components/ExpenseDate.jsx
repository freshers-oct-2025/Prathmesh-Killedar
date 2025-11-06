import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  // 🛡️ Guard clause — handle missing or invalid date
  if (!(date instanceof Date) || isNaN(date)) {
    return (
      <div className="expense-date">
        <div className="ed-month">—</div>
        <div className="ed-day">—</div>
        <div className="ed-year">—</div>
      </div>
    );
  }

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="ed-month">{month}</div>
      <div className="ed-day">{day}</div>
      <div className="ed-year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
