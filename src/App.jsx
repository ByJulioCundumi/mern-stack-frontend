import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/register/register'
import Login from './pages/login/login'
import NavBar from "./components/nav/nav"
import Footer from "./components/footer/footer"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tasks' element={""}/>
        <Route path='/post-task' element={""}/>
        <Route path='/task/:id' element={""}/>
        <Route path='/profile' element={""}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
