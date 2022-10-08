import './Expenses.css';
import ExpenseItem from './ExpenseItem';
const Expenses = function (props) {
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
  return <div className="expenses">{expenseItemJSX}</div>;
};
export default Expenses;
