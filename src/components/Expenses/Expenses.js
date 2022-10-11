import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const expenseItemJSX = props.expenses.map((exp) => {
    return (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        date={exp.date}
        amount={exp.amount}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={onYearChangeHandler}
      />
      {expenseItemJSX}
    </Card>
  );
};
export default Expenses;
