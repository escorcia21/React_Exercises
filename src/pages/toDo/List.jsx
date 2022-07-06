import React, {useState} from 'react'
import './List.css'
import { v4 as uuidv4 } from 'uuid'

const List = () => {
    const [state,setState] = useState([])
    const [input,setInput] = useState('')

    function addTodo() {
        setState([...state,...[{name:input, id: uuidv4()}]])
        setInput('')
    }

    function deleteTodo(payload) {
        const newArray = state.filter(product => product != payload);
		setState(newArray);
    }

    return (
        <div className="containerTodo">
            <div className='input-container'>
                {!input && <p>Empty input</p>}
                <input type="text" onInput={(e) => setInput(e.target.value)} value={input}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {
                    state.map((todo) => {
                        return (
                        <div className='todo'>
                            <li key={todo.id}>{todo.name}</li>
                            <button onClick={
                                () => deleteTodo(todo)
                            }>x</button>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List