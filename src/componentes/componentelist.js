import React from 'react';

const Lista = (props) => {
    return (
        <>
            <form onSubmit={props.saveItem}>
                <input type="text" className="form-control" value={props.lista} onChange={props.onChangelista} placeholder="Escriba su tarea aqui" />
            </form>
            <ul>
                {
                    props.todos.map((tarea)=>{
                        return (
                            <li>{tarea}</li>
                        );
                    })
                }
            </ul>
            <div className="contador">
                Tienes {props.todos.length} tareas 
            </div>
        </>
    )
}

export default Lista;