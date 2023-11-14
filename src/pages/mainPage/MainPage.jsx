import React, {useState} from 'react';
import '../mainPage/mainPage.css'

function MainPage() {

    const [category, setCategory] = useState('personal')
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <>
            <main className="container">


                    <h1 className="main__title">
                        What's up,{' '}
                        <span className="main__title edit" contentEditable="true">
                            Elaman
                        </span>
                    </h1>

                    <p className="main__description">CREATE A TODO</p>

                    <h3 className="main__todoText">What's on your todo list?</h3>
                    <input type="text" className="main__todoInput" placeholder="e.g. get a milk"/>
                    <h3 className="main__todoText">What's on your todo list?</h3>

                    <div className="radio-buttons">
                        <label className="radio-button">
                            <input type="radio" name="category" value="business" onChange={handleCategoryChange} />
                            <span className="radio-btn business"></span>
                            <div className="radio-title">Business</div>
                        </label>
                        <label className="radio-button">
                            <input type="radio" name="category" value="personal" onChange={handleCategoryChange} />
                            <span className="radio-btn personal"></span>
                            <div className="radio-title">Personal</div>
                        </label>
                    </div>

                    <div className="main__btn">
                        <button className="btn-add-todo">Add todo</button>
                    </div>

            </main>
        </>
    );
}

export default MainPage;