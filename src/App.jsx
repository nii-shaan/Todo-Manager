import React from "react";
import InputBar from "./Components/InputBar";
import TodoItem from "./Components/TodoItem";

function App() {







  return (
    <>
      <div className="bg-[#212121] h-[1200px] w-full ] flex items-start">
        <div className="bg-[#303A52] min-h-[300px] w-[800px]  mx-auto mt-[100px] rounded-lg">
          <div
            id="inputSection"
            className=" border-b border-white h-[100px] w-full flex items-center justify-center"
          >
            <InputBar />
          </div>

          <div className=" max-h-[700px] p-[20px] overflow-y-scroll">
            {/* Todo Item components */}
            <TodoItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
