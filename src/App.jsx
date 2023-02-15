import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './App.css';
import 'primeicons/primeicons.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addHandler = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div className='App'>
      <div className='  flex gap-3  '>
        <InputText
          placeholder='Items . . .'
          className='p-2'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          className='bg-green-500 p-2 hover:bg-green-600  text-2xl'
          onClick={addHandler}
        >
          +
        </Button>
      </div>
      <div className='mt-3'>
        {todos.map((t, i) => {
          return (
            <div className='p-2 mt-2 bg-gray-800 flex justify-between' key={i}>
              <p>{t}</p>
              <div className='flex gap-2'>
                <i className='pi pi-pencil text-blue-500 mt-1 hover:text-blue-600'></i>
                <i className='pi pi-trash text-red-500 mt-1 hover:text-red-600'></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
