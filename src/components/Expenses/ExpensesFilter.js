import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const pickYearHandler = (event) => {
    // for (let i = 0; i < event.target.length; i++) {
    //   if (event.target[i].selected === true)
    //     selectedYear = event.target[i].value;
    // }
    props.onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={pickYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
