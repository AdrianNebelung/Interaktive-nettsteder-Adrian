import "./App.css";
import "./style/layout.scss";
import "./style/todocard.scss";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";
import { useState } from "react";

function App() {

  const todoItems = [
    {
      id: 0,
      title: "Gå på butikken",
      content: "Handle spagetthi og dorull"
    },
    {
      id: 1,
      title: "Skrive emnerapport",
      content: "Gå igjennom statestikk og skrive rapport basert på tall og tibakemelding"
    },
    {
      id: 2,
      title: "Kjøpe kattemat",
      content: "Kjøpe nytt slankefor..."
    }
  ];
  
  const [todoList, setTodoList] = useState(todoList);
  const [todo, setTodo] = useState();
    

  return (
  <main>
    <h1>Todo app</h1>
    <AddToDo todo={todo} setTodo={setTodo} setTodoList={setTodoList}/>
    <Todos todoItems={todoItems} setTodoList={setTodoList}/>
  </main>
  )
}

export default App;