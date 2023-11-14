import React from 'react';

function TodoList(props) {
    return (
        <>
            <div className="container">
            <li className="list-group-item">
                <div className="list-group-item-left">
                    <label className="todo-list-radio">
                        <input type="checkbox" id="task_checkbox" data-index="${index}" data-type="toggleTask"/>
                        <span className="radio-btn ${newNote.category}"></span>
                    </label>
                    <span id="editText" className="todo-task-text ${newNote.completed ? 'task-done' : ''}" data-index="${index}" ></span>
                </div>

                <span className="todo-buttons">
                    <button className="btn btn-edit-task">Edit</button>
                    <button className="btn btn-edit-delete">Delete</button>
                </span>
            </li>
            </div>
        </>
    );
}

export default TodoList;