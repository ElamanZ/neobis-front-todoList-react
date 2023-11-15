import React from 'react';
import '../todoList/todoList.css'
function TodoList(props) {

    const handleCheckboxChange = () => {
        props.onChangeTodoStatus(props.todo.id); // Передача id задачи для обновления статуса
    };
    const btnCompleted = () => {
        return props.todo.completed = !props.todo.completed
    }
    return (
        <>
            <li className="list-group-item">
                <div className="list-group-item-left">
                    <label className="todo-list-radio">
                        <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={props.todo.completed}
                            onClick={btnCompleted}
                        />
                        <span className="radio-btn"></span>
                    </label>
                    <span id="editText" className="todo-task-text">{props.todo.text}</span>
                </div>

                <span className="todo-buttons">
                    <button className="btn btn-edit-task">Edit</button>
                    <button className="btn btn-edit-delete">Delete</button>
                </span>
            </li>

        </>
    );
}

export default TodoList;