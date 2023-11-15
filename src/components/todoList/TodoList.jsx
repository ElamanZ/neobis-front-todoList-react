import React from 'react';
import '../todoList/todoList.css'
function TodoList({todo, deleteTodo, onChangeTodoStatus}) {

    const handleCheckboxChange = () => {
        onChangeTodoStatus(todo.id);
    };
    const btnCompleted = () => {
        return todo.completed = !todo.completed
    }


    return (
        <>
            <li className="list-group-item">
                <div className="list-group-item-left">
                    <label className="todo-list-radio">
                        <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={todo.completed}
                            onClick={btnCompleted}
                        />
                        <span className={`radio-btn ${todo.category === 'personal' ? "personal" : "business"}`}></span>
                    </label>
                    <span id="editText" className="todo-task-text">{todo.text}</span>
                </div>

                <span className="todo-buttons">
                    <button className="btn btn-edit-task">Edit</button>
                    <button className="btn btn-edit-delete" onClick={()=> deleteTodo(todo)}>Delete</button>
                </span>
            </li>

        </>
    );
}

export default TodoList;