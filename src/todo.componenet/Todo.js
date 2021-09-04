import React, { useState } from "react";
import FlipMove from "react-flip-move";

function Todo() {
  //   const [todos, setTodos] = useState(["hello", "jio", "kio"]);

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // it prevents the refresh the page when enter the button

    console.log(`input ${input}`);
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <center>
        {" "}
        <h1>My todos</h1>
        {/* 
onChange -> listner
e -> event and event came from what user type in text in input field
target -> Html attribute which is in the input field
value -> actual text in input field ehich is enterted by user
*/}
        {/* on press enter button add todo in todo list  for this used <form> and in button attibute add field type = "submit", wrapp the input and button into form attribute */}
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button type="submit" onClick={addTodo}>
            Add todo
          </button>{" "}
        </form>
        <h3>List of Todos</h3>
        <FlipMove>
          {todos.map((todo) => (
            <p>{todo}</p>
          ))}
        </FlipMove>
        {/* if we have additional code then return*/}
        {/* {todos.map((todo) => {
  return <p>{todo}</p>;
})} */}
      </center>
    </div>
  );
}

export default Todo;
