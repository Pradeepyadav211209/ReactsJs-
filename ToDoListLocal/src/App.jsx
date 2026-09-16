import './App.css'
import {useState , useEffect} from 'react'
import { ToDoProvide } from './contexts/ToDoContext'
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItems';

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  const updatetodo = (id, updatedTodo) => {
    setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo));
  };

  const deletetodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  const togglecomplete = (id) => {
    setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvide value={{ todos, setTodos, addtodo, updatetodo, deletetodo, togglecomplete }}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <ToDoItem key={todo.id} todo={todo} />
                        ))}
                        
                    </div>
                </div>
            </div>
    </ToDoProvide>
  )
}


export default App
