import './App.css'
import Login from './pages/login/logIn.jsx'
import SignUp from './pages/signup/signUp.jsx'
import Home from './pages/home/home.jsx'
import { Routes,Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

function App() {
  

  return (
        <>
        <div className='p-4 h-screen flex items-center justify-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
          <Toaster />
        </div>
        
        </>
  )
}

export default App
