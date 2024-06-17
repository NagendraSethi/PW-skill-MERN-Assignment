import './App.css'
import Button from './components/Button';
import Header from './components/Header';
import Person from './components/Person';
import List from './components/List';

function App() {
  const handleButton=()=>{
    alert("button clicked!");
  }

  const items=["Apple","Banana","Mango"];
  return (
    <>
      <Person name="Nagendra" age={24}/>
      <Button onClick={handleButton} text="Click Me"/>
      <Header title="My Application"/>
      <List items={items}/>
    </>
  )
}

export default App;
