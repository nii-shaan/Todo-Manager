import React, { useState,useEffect } from "react";
import InputBar from "./Components/InputBar";
import TodoItem from "./Components/TodoItem";
import { TodoContextProvider } from "./Contexts/TodoContext";
import { useSelector } from "react-redux";



function App() {

  
  const fetchedTodoFromStore = useSelector((store)=>store.todo.todos)
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setTodos(fetchedTodoFromStore)
  },[fetchedTodoFromStore])


useEffect(()=>{
  const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
   if(localStorageTodos && localStorageTodos.length>0){
     setTodos(localStorageTodos)
   }

},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

    
  return (
    <>

      

      
        <div className="bg-[#212121] h-[1200px] w-full ] flex items-start">
          <div className="bg-[#303A52] min-h-[300px] w-[800px]  mx-auto mt-[100px] rounded-lg md:w-[400px]">
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
    </>
  );
}

export default App;
