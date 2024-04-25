import React, { useState,useEffect,useRef } from "react";
import { motion } from "framer-motion";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { FaRegSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editTodo,deleteTodo,markTodo } from "../State/todoSlice";

function TodoItem({ todo }) {
  // console.log(todo);

  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.todo);


  const handleEdit = () => {
    dispatch(editTodo({id:todo.id,todo:todoTitle}))
    setIsEditable(false)
  };

  const handleDelete = () => {
    dispatch(deleteTodo({id:todo.id}))
  };

  const handleMark = () => {
    dispatch(markTodo({id:todo.id}))
  };

  const inputRef = useRef(null);


  useEffect(() => {
    if (isEditable) {
        inputRef.current.focus();
    }
}, [isEditable]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            duration: 0.3,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className={`${todo.marked ? "bg-[#8DECB4]" : "bg-[#DBD8E3]"} w-full h-[50px] border-[2px] border-black rounded-lg flex  items-center pl-[10px] gap-[10px] 
        `}
      >
        <div className="h-[25px] w-[5%] flex items-center justify-center ">
          <input
          disabled={isEditable}
            checked={todo.marked}
            onChange={handleMark}
            type="checkbox"
            className="w-full h-full transition-transform"
          />
        </div>

        <div className="h-full w-[70%] flex items-center justify-center">
          <input
            ref={inputRef}
            readOnly={!isEditable}
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            type="text"
            className={`text-center  h-[75%] w-full rounded-lg bg-transparent ${
              todo.marked ? "line-through" : ""
            }`}
          />
        </div>

        <div
          id="DeleteEditButton"
          className="  h-full w-[20%] px-[20px] flex items-center justify-evenly"
        >
          <button
            onClick={() => {
                if(todo.marked){
                    return;
                }
                else if(isEditable) {
                    handleEdit()
                }else{
                    setIsEditable((prev)=>!prev)
                    // console.log('pass');

                }
                
            }}
          >
            {isEditable ? (
              <FaRegSave className="h-[30px] w-[30px] hover:text-[#17594A] active:text-[#FF004D]" />
            ) : (
              <FiEdit className={`${todo.marked?"text-gray-500 active:text-gray-500 hover:text-gray-500":"text-black"} h-[30px] w-[30px] hover:text-[#17594A] active:text-[#FF004D]`} />
            )}
          </button>
          <RxDividerVertical className="text-[40px]" />
          <button onClick={handleDelete}>
            <MdDeleteForever className="h-[35px] w-[35px] hover:text-[#FF004D] active:text-[#17594A] " />
          </button>
        </div>
      </motion.div>   
    </>
  );
}

export default TodoItem;
