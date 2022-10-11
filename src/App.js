import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const getDate = (date) => new Date(date);
  const expenses = [
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
      amount: 122.0,
    },
    {
      id: 'e4',
      title: 'Grocery',
      date: getDate('2022, 10, 12'),
      amount: 122.0,
    },
  ];
  const addExpenseHandler = (expenses) => {
    console.log('In App.js');
    console.log(expenses);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
