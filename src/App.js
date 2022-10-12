import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const getDate = (date) => new Date(date);
  const DUMMY_EXPENSE = [
    {
      id: 'e1',
      title: 'Car Insurance',
      date: getDate('2021, 2, 28'),
      amount: 212.9,
    },
    {
      id: 'e2',
      title: 'Health',
      date: getDate('2022, 4, 21'),
      amount: 99.87,
    },
    {
      id: 'e3',
      title: 'Rent',
      date: getDate('2022, 10, 2'),
      amount: 125.0,
    },
    {
      id: 'e4',
      title: 'Grocery',
      date: getDate('2022, 10, 12'),
      amount: 122.0,
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expenses) => {
    expenses.date = getDate(expenses.date);
    setExpenses((prevExpenses) => [expenses, ...prevExpenses]);
  };
  // const filterSelectHandler = (filteredYear) => {
  //   const filteredExpenses = expenses.filter(
  //     (exp) => exp.date.getFullYear() === filteredYear
  //   );
  //   console.log(filteredExpenses);
  //   setExpenses(filteredExpenses);
  // };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        // filterSelect={filterSelectHandler}
        expenses={expenses}
      />
    </div>
  );
};

export default App;
