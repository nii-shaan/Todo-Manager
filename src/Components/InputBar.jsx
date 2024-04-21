import React, { useState } from "react";
import { useTodoContext } from "../Contexts/TodoContext";

function InputBar() {

    const {addTodo} = useTodoContext()

    const [userInput,setUserInput] = useState("")


    const handleAddTask = ()=>{
      if(!userInput.trim()) return
        addTodo(userInput)
        setUserInput("")

    }



  return (
    <>
      <div className="w-full h-[80px] flex items-center justify-center md:w-[90%]">
        <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} type="text" className="w-[300px] h-[40px] outline-none  text-center rounded-l-lg" />




        <button onClick={handleAddTask} className="rounded-r-lg relative w-[150px] h-[40px] cursor-pointer flex items-center border bg-[#201658] group active:bg-[#535C91]  overflow-hidden">
            
          <span className="text-[#FEFBF6] font-semibold ml-12 transform group-hover:translate-x-20 transition-all duration-300">
            Add
          </span>
          <span className="absolute right-0 h-full w-10 rounded-lg text-[#FEFBF6] bg-[#201658] active:bg-[#535C91] active:text-[#74E291] active:duration-0 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8  "
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default InputBar;
