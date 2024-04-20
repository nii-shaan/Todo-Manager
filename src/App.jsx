import React, { useState } from "react";
import InputBar from "./Components/InputBar";
import TodoItem from "./Components/TodoItem";
import { TodoContextProvider } from "./Contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      { id: Date.now(), todo: todo, marked: false },
      ...prev,
    ]);
  };

  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        (eachTodo.id === id ?{...eachTodo,todo:todo}:eachTodo)
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };

  const markTodo = (id) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, marked:!eachTodo.marked }
          : eachTodo
      )
    );
  };

  return (
    <>
      <TodoContextProvider value={{ todos,addTodo, editTodo, deleteTodo, markTodo }}>
        <div className="bg-[#212121] h-[1200px] w-full ] flex items-start">
          <div className="bg-[#303A52] min-h-[300px] w-[800px]  mx-auto mt-[100px] rounded-lg">
            <div
              id="inputSection"
              className=" border-b border-white h-[100px] w-full flex items-center justify-center"
            >
              <InputBar />
            </div>

            <div className=" max-h-[600px] p-[20px] overflow-y-scroll">
              {/* Todo Item components */}
              {todos.map((item)=> <div key={item.id}> <TodoItem  todo={item} />  </div> )}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
