import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import './List.css'

const List = () => {
    const [state,setState] = useState([])
    const [input,setInput] = useState('')

    function addTodo() {
        if (input.replace(/\s/g, '').length > 0) {
            setState([...state,...[{name:input, id: uuidv4()}]])
            setInput('')
        }
    }

    function deleteTodo(payload) {
        const newArray = state.filter(product => product != payload);
		setState(newArray);
    }

    return (
        <div className="containerTodo">
            <div className="todo">
                <h1 className='title'>ToDo</h1>
                <div className='input-container'>
                    {/* {!input && <div className='empty'>Empty input</div>} */}
                    <form action="">
                        <input type="text" id="input-todo" onInput={(e) => setInput(e.target.value)} name="inputTodo" value={input} autocomplete="off" required/>
                        <label htmlFor="inputTodo">ToDo</label>
                    </form>
                    <button id='addbtn' onClick={addTodo}>Add</button>
                </div>
                <ul className='todo-list'>
                    {
                        state.map((todo) => {
                            return (
                            <div className='todo-item'>
                                <li key={todo.id}>
                                    <p>{todo.name}</p>
                                </li>
                                <button  onClick={
                                    () => deleteTodo(todo)
                                }>Delete</button>
                            </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List