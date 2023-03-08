
import ExpenseItem from './components/ExpenseItem';
const expenses=[
{
  id:'e1',
  title:'toilet paper',
  amount:94.12,
  date: new Date(2023,2,8),
},
{
  id:'e2',
  title:'mum1',
  amount:94.12,
  date: new Date(2023,2,8),
},
{
  id:'e3',
  title:'maxi',
  amount:94.12,
  date: new Date(2023,2,8),
}
]

function App() {
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title}date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date}amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date}amount={expenses[2].amount}></ExpenseItem>

    </div>
  );
}

export default App;
