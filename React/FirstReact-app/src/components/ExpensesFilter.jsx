import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangefilter(event.target.value);
  };

  return (
    <>
      <div className="exp-filter">
        <div className="exp-filter_control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpensesFilter;
