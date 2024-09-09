import './App.css'

import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Add from './Components/Add'
import Home from './Components/Home'

function App() {
  
  

  return (
    <>
    <Nav/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />}/>

          
        </Routes>
        
        
      
      
      
    </>
  )
}

export default App