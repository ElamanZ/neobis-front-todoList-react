import React, { useState } from 'react';
import '../mainPage/mainPage.css';
import TodoList from '../../components/todoList/TodoList';

function MainPage() {
    const [editableText, setEditableText] = useState('Elaman');
    const [category, setCategory] = useState('personal');
    const [textTodo, setTextTodo] = useState('');
    const [id, setId] = useState(1);
    const [todos, setTodos] = useState([]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const addNewTodo = () => {
        if (textTodo !== '') {
            const newTodo = {
                id: id,
                text: textTodo,
                completed: false,
                category: category === 'personal' ? 'personal' : 'business',
            };
            setTodos([...todos, newTodo]);
            setTextTodo('');
            setId(id + 1);
        }
    };

    const deleteBtn = (todoToDelete) => {
        setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
    };

    const completeTodo = (updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1 className="main__title">
                What's up,{' '}
                <span className="main__title edit">
                    <input
                        className="main__titleInput"
                        type="text"
                        value={editableText}
                        onChange={(e) => setEditableText(e.target.value)}
                    />
                </span>
            </h1>
            <p className="main__description">CREATE A TODO</p>

            <h3 className="main__todoText">What's on your todo list?</h3>
            <input
                className="main__todoInput"
                type="text"
                placeholder="e.g. get a milk"
                value={textTodo}
                onChange={(e) => setTextTodo(e.target.value)}
            />

            <div className="radio-buttons">
                <label className="radio-button">
                    <input
                        type="radio"
                        name="category"
                        value="business"
                        onChange={handleCategoryChange}
                        checked={category === 'business'}
                    />
                    <span className="radio-btn business"></span>
                    <div className="radio-title">Business</div>
                </label>
                <label className="radio-button">
                    <input
                        type="radio"
                        name="category"
                        value="personal"
                        onChange={handleCategoryChange}
                        checked={category === 'personal'}
                    />
                    <span className="radio-btn personal"></span>
                    <div className="radio-title">Personal</div>
                </label>
            </div>

            <div>
                <button className="btnAddTodo" onClick={addNewTodo}>
                    Add todo
                </button>
            </div>

            {todos.length !== 0 ? (
                todos.map((todo) => (
                    <TodoList
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteBtn}
                        completeTodo={completeTodo}
                    />
                ))
            ) : (
                <div className="main__todoText f-size">
                    The task list is empty
                </div>
            )}
        </div>
    );
}

export default MainPage;
