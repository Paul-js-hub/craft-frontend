import React from "react";
import Update from "./Update";

const Todo = ({
  title,
  deleteTodo,
  id,
  updateTodo,
  completed,
  handleToggleTodo,
}) => {
  return (
    <div className="bg-white text-center m-5 rounded-xl w-2/6">
      <div className="flex justify-between space-x-5 rounded-md bg-indigo-900">
        <div className="block">
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className={`w-10 h-10 font-medium`}
                onClick={() => handleToggleTodo(id)}
              />
              <h5
                className={
                  completed
                    ? "font-sans font-semibold text-2xl p-1 mb-2 line-through text-white"
                    : "text-white"
                }
              >
                {title}
              </h5>
            </label>
          </div>
        </div>
        <div className="inline-flex items-center">
          <Update updateTodo={updateTodo} id={id} title={title} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-2 ml-4 mr-2 cursor-pointer bg-red-500 text-white font-medium rounded-xl hover:bg-red-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick={() => deleteTodo(id)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Todo;
