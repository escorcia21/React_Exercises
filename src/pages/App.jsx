import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Clock from '@pages/clock/Clock'
import List from '@pages/toDo/List'
import MaxCount from '@pages/maxCount/MaxCount'

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={'hola'}/>
            <Route path='/clock' element={<Clock/>}/>
            <Route path='/todo' element={<List/>}/>
            <Route path='/count' element={<MaxCount/>}/>
        </Routes>
    </BrowserRouter>
}

export default App