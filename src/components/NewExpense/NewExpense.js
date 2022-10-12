import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClicked(false); // Form should not be displayed
  };
  const onCancelHandler = () => {
    setClicked(false);
  };
  const [isClicked, setClicked] = useState(false);
  const onClickHandler = () => {
    setClicked(true);
  };
  const addExpenseButtonJSX = (
    <button onClick={onClickHandler}>Add New Expense</button>
  );
  const expenseFormJSX = (
    <ExpenseForm
      onSaveExpenseData={onSaveExpenseDataHandler}
      onCancel={onCancelHandler}
    />
  );

  const newExpenseViewJSX = isClicked ? expenseFormJSX : addExpenseButtonJSX;
  return <div className="new-expense">{newExpenseViewJSX}</div>;
};
export default NewExpense;
