import Expenses from './components/Expenses/Expenses';
function App() {
  const getDate = (date) => new Date(date);
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      date: getDate('2021, 2, 28'),
      amount: 212.9,
    },
    {
      id: 2,
      title: 'Health',
      date: getDate('2022, 4, 21'),
      amount: 99.87,
    },
    {
      id: 3,
      title: 'Rent',
      date: getDate('2022, 10, 2'),
      amount: 122.0,
    },
    {
      id: 4,
      title: 'Grocery',
      date: getDate('2022, 10, 12'),
      amount: 122.0,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
