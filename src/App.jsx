import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './pages/register/register'
import Login from './pages/login/login'
import NavBar from "./components/nav/nav"
import Footer from "./components/footer/footer"
import Profile from "./pages/profile/profile"
import {ProtectedRoutes} from "./components/authRoutes/protectedRoutes"
import AuthProvider from "./context/authContext"
import CreateTask from "./pages/createTask/createTask"
import TasksProvider from "./context/tasksContext"
import Tasks from "./pages/tasks/tasks"
import UpdateTask from "./pages/uptdateTask/updataTask"

function App() {
  return (
      <AuthProvider>
        <TasksProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/post-task' element={<CreateTask/>}/>
          <Route path='/put-task/:id' element={<UpdateTask/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>

        </Routes>
      <Footer/>
    </BrowserRouter>
    </TasksProvider>
    </AuthProvider>
  )
}

export default App
