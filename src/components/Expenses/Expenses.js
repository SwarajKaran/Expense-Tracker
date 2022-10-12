import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const onYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={onYearChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} filteredYear={filteredYear} />
    </Card>
  );
};
export default Expenses;
