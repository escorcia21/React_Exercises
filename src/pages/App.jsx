import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Clock from '@pages/clock/Clock'

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={'hola'}/>
            <Route path='/clock' element={<Clock/>}/>
        </Routes>
    </BrowserRouter>
}

export default App