import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 10.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "car insurance",
      amount: 294.67,
      date: new Date(2021, 5, 19),
    },
    {
      id: "e3",
      title: "new tv",
      amount: 364.2,
      date: new Date(2021, 10, 15),
    },
    {
      id: "e4",
      title: "new desk",
      amount: 450,
      date: new Date(2021, 6, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </div>
  );
}

export default App;
