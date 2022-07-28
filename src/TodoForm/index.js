import React from "react";
import './TodoForm.css';

function TodoForm({
    addTodo,
    setOpenModal,
}){
    //Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    //Creamos una funcion para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    //Funcion para cerrar el modal:
    const onCancel = () => {
        setOpenModal(false);
    };

    //Funcion para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        //prevent default para evitar recargar la pagina
        event.preventDefault();
        //utilizamos nuestra funcion para anadir nuestro TODO
        addTodo(newTodoValue);
        //cerramos nuestro modal
        setOpenModal(false);
        //Tambien estaria bien resetear nuestro formulario
        setNewTodoValue('');
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Llorar cortando la cebolla"
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };