import React, { useState } from "react";
import axios from 'axios'
const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  // const [id, seID] = useState("")
  const onSubmit = (e) =>{
    e.preventDefault()
    axios.post(process.env.REACT_APP_API_URL + "/todos", {
      title, completed
    })
    .then(response =>{
      if(response.data.message === "Your todo has been successfully uploaded"){
        addTodo(title, completed)
      }
      setTitle("")
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <form className="flex justify-center mt-4" onSubmit={e =>{onSubmit(e)}}>
      <div className="flex justify-between items-center">
        <div className="input1">
          <label className="text-xl font-bold px-4">Title</label>
          <input 
          className="block py-2 px-4 mt-1 ml-4 mb-0 mr-0 border-solid border-2 border-teal-500 rounded focus:outline-blue" 
          type='text'
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
        </div>
        {/* <div className="input2">
          <label className="text-xl font-bold px-4">Description</label>
          <input className="block py-2 px-4 mt-1 ml-4 mb-0 mr-0 border-solid border-2 border-teal-500 rounded focus:outline-blue" />
        </div> */}
      </div>
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto ml-4">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
