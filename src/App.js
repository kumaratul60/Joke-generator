import "./App.css";
import JokeGeneratr from "./JokeGenerator/customHooks_JokeGenerator/JokeGeneratr";
import JokeGenerator from "./JokeGenerator/JokeGenerator";
import Todo from "./todo.componenet/Todo";

function App() {
  return (
    <div className="app">
      <Todo />
      {/* <JokeGenerator /> */}
      <JokeGeneratr />
    </div>
  );
}

export default App;
