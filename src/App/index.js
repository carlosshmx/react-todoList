import react from 'react';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'


// const defaultTodos = [
//   {text: 'Cambiar el bombillo', completed: false},
//   {text: 'Estudiar para el examen', completed: false},
//   {text: 'Comprar comida', completed: true},
//   {text: 'Transferir archivos', completed: false}
// ]



function App(props) {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
