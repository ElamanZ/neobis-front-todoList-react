import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import TodoList from "./pages/components/todoList/TodoList";
import '../src/index.css'
function App() {
  return (
      <div className="App">
        <MainPage/>
        <TodoList/>
      </div>
  );
}

export default App;
