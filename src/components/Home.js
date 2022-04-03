import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import AddTodo from './AddTodo'
import Todo from './Todo'
const Home = () => {
    const [todos, setTodos] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        let fetchTodos = async () => {
          const result = await axios(process.env.REACT_APP_API_URL + "/todos");
          console.log("RESULT", result)
          setTodos(result.data);
        };
        fetchTodos();
      }, []);

      let fetchTodos = async () => {
        const result = await axios(process.env.REACT_APP_API_URL + "/todos");
        console.log("result>>>", result)
        setTodos(result.data);
      };

      const addTodo = (title, completed) =>{
        let copy = [...todos]
        copy.push({title, completed})
        fetchTodos()
      }

      const deleteTodo = (id) =>{
        axios.delete(process.env.REACT_APP_API_URL + `/todos/${id}`)
        .then(() =>{
        fetchTodos()
        })
        .catch(err =>{
          console.log(err)
        })
      }

      const updateTodo = (todo) =>{
        const newTodo = {title: todo.title}
        //console.log("NEWTODO", newTodo)
        axios.put(process.env.REACT_APP_API_URL + `/todos/${todo.id}`, newTodo)
        .then(() =>{
          navigate("/home")
          fetchTodos()
        })
        .catch(err =>{
          console.log(err)
        })
      }
  return (
    <div className='h-100 w-full flex items-center justify-center'>
        <div className='bg-white rounded shadow p-6 m-4 w-full'>
        <div className='mb-4'>
        <h1 className='text-3xl font-bold text-center'>My Todos</h1>
        <AddTodo addTodo={addTodo}/>
        </div>
        <div className='grid justify-items-center'>
        {todos.map(todo => {
          return (
            <Todo 
             key={todo._id}
             title={todo.title}
             description={todo.description}
             id={todo._id}
             deleteTodo={deleteTodo}
             updateTodo={updateTodo}
            />
          );
        })}
        </div>
        </div>
    </div>
  )
}

export default Home
