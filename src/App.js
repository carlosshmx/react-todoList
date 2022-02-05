import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSeach';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton} from './CreateTodoButton'
//import './App.css';
const defaultTodos = [
  {text: 'Cambiar el bombillo', completed: false},
  {text: 'Estudiar para el examen', completed: false},
  {text: 'Comprar comida', completed: true},
  {text: 'Transferir archivos', completed: false}
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
      searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />

      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
