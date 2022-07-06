import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Clock from '@pages/clock/Clock'
import List from '@pages/toDo/List'

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={'hola'}/>
            <Route path='/clock' element={<Clock/>}/>
            <Route path='/todo' element={<List/>}/>
        </Routes>
    </BrowserRouter>
}

export default App