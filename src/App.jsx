import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './App.css';
import 'primeicons/primeicons.css';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const addHandler = () => {
    setTodos([...todos, { id: Math.random(), todo: todoInput }]);
    setTodoInput('');
  };

  const editHandler = (id) => {
    setSelectedId(id);
    setEditFlag(true);
    todos.map((t) => {
      if (t.id === id) {
        setTodoInput(t.todo);
      }
    });
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addEditedHandler = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === selectedId) {
          return { ...todo, todo: todoInput };
        }
        return todo;
      }),
    );
    setTodoInput('');
    setSelectedId('');
    setEditFlag(false);
  };

  return (
    <div className='App'>
      <div className='  flex gap-3  '>
        <InputText
          placeholder='Items . . .'
          className='p-2'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />

        {editFlag ? (
          <Button
            className='bg-green-500 p-2 hover:bg-green-600  text-2xl'
            onClick={addEditedHandler}
          >
            <i className='pi pi-pencil text-sm' />
          </Button>
        ) : (
          <Button
            className='bg-green-500 p-2 hover:bg-green-600  text-2xl'
            onClick={addHandler}
          >
            <i className='pi pi-plus text-sm' />
          </Button>
        )}
      </div>
      <div className='mt-3'>
        {console.log(todos)}
        {todos.map((t, i) => {
          return (
            <div className='p-2 mt-2 bg-gray-800 flex justify-between' key={i}>
              <p>{t.todo}</p>
              <div className='flex gap-2'>
                <i
                  onClick={() => editHandler(t.id)}
                  className='pi pi-pencil text-blue-500 mt-1 hover:text-blue-600'
                ></i>
                <i
                  onClick={() => deleteHandler(t.id)}
                  className='pi pi-trash text-red-500 mt-1 hover:text-red-600'
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
