import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//we can use object destructuring also like functon ExpenseItem({date,title,amount}){} like this
function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item_desc">
          <h2>{props.title}</h2>
          {/* Alternate way to use props
          <h2>{props.expense.title}</h2> */}
          <div className="expense-item_price">Rs.{props.amount}</div>
          {}
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
