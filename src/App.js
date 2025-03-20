import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Estudiar', completed: false },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = JSON.parse(localStorageTodos);
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter((todos) => {
    const todoText = todos.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)});
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue
        }
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text) }
          />
        ))}                   
      </TodoList> 

      <CreateTodoButton />
    </>
  );
}




export default App;
