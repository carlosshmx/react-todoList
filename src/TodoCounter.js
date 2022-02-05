import React from "react";
import './TodoCounter.css';


function TodoCounter({total, completed}){
    
    return(
        <div className="TodoCounter">
            <h1 >Tus tareas</h1>
            <h2>Has completado {completed} de {total} TODOs</h2>
        </div>
        
    )
}

export { TodoCounter };