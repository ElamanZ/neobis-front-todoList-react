import React, {useState} from 'react';
import '../mainPage/mainPage.css'
import TodoList from "../../components/todoList/TodoList";

function MainPage() {

    const [category, setCategory] = useState('personal')
    const [textTodo, setTextTodo] = useState('')

    const [todos, setTodos] = useState([])
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    const addNewTodo = () => {
        if (textTodo !== "") {
            const newTodo = {
                text: textTodo,
                completed: false,
                category: category === 'personal' ? 'personal' : 'business'
            }
            setTodos([...todos, newTodo])
            setTextTodo('')
        }
    }

    const handleChangeTodoStatus = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        });
    };
    return (
        <>
            <div className="container">
                    <h1 className="main__title">
                        What's up,{' '}
                        <span className="main__title edit"  >
                            Elaman contentEditable="true"
                        </span>
                    </h1>



                    <p className="main__description">CREATE A TODO</p>

                    <h3 className="main__todoText">What's on your todo list?</h3>
                    <input
                        className="main__todoInput"
                        type="text"
                        placeholder="e.g. get a milk"
                        value={textTodo}
                        onChange={e => setTextTodo(e.target.value)}
                    />
                    <h3 className="main__todoText">What's on your todo list?</h3>

                    <div className="radio-buttons">
                        <label className="radio-button">
                            <input type="radio" name="category" value="business" onChange={handleCategoryChange} checked={category === 'business'}/>
                            <span className="radio-btn business"></span>
                            <div className="radio-title">Business</div>
                        </label>
                        <label className="radio-button">
                            <input type="radio" name="category" value="personal" onChange={handleCategoryChange} checked={category === 'personal'}/>
                            <span className="radio-btn personal"></span>
                            <div className="radio-title">Personal</div>
                        </label>
                    </div>

                <div>
                    <button className="btnAddTodo" onClick={addNewTodo}>Add todo</button>
                </div>

                {todos.map((todo) =>
                    <TodoList todo={todo} key={todo.id} onChangeTodoStatus={handleChangeTodoStatus}/>
                )}
            </div>
        </>
    );
}

export default MainPage;