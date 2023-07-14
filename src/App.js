import ExpenseItem from "./components/ExpenseItem";
// import ExpenseDate from "./components/ExpenseDate";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
