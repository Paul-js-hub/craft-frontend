import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchTodos = async () => {
          const result = await axios(process.env.REACT_APP_API_URL + "/todos");
          setTodos(result.data);
        };
        fetchTodos();
      }, []);
  return (
    <div>
        <h1 className='text-3xl font-bold'>My Todos</h1>
         <div className="flex items-center justify-center min-h-screen">
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo._id}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  )
}

export default Home
