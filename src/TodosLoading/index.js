import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodosLoading.css'

function TodosLoading(){
    const{totalTodos} = React.useContext(TodoContext);

    return(
        <div className='LoadingTodo-container'>
            <span className='Icon LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'> Cargando... </p>
            <span className='Icon LoadingTodo-deleteIcon'></span>
        </div>
    ); 



    
}

export { TodosLoading }