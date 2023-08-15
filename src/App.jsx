import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={""}/>
        <Route path='/login' element={""}/>
        <Route path='/register' element={""}/>
        <Route path='/tasks' element={""}/>
        <Route path='/post-task' element={""}/>
        <Route path='/task/:id' element={""}/>
        <Route path='/profile' element={""}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
