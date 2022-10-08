import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
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
  return <Card className="expenses">{expenseItemJSX}</Card>;
};
export default Expenses;
