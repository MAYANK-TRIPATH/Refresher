import './App.css';
import Counter from "./components/Counter";
import { useContext } from "react";
import { ConterContext } from "./context/conter"; 

function App() {
  const counterState = useContext(ConterContext);
  console.log("Context", counterState)

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
