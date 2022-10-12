import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import Card from '../UI/Card';
const ExpensesList = (props) => {
  if (props.expenses.length === 0)
    return (
      <Card className="expenses-list__fallback">
        <strong>No expenditure in the Year {props.filteredYear}</strong>
      </Card>
    );
  return (
    // <ul className="expenses-list">
    <div>
      {props.expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </div>
    // </ul>
  );
};
export default ExpensesList;
