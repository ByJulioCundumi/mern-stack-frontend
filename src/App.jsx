import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/register/register'
import Login from './pages/login/login'
import NavBar from "./components/nav/nav"
import Footer from "./components/footer/footer"
import {ProtectedRoutes} from "./components/authRoutes/protectedRoutes"
import AuthProvider from "./context/authContext"

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tasks' element={<div>Tasks page</div>}/>
        <Route path='/post-task' element={<div>Post task page</div>}/>
        <Route path='/task/:id' element={<div>Find task page</div>}/>
        <Route path='/profile' element={<div>Profile page</div>}/></Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
