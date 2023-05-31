
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//pages for aplication
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'

// components for aplication
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/register" element={ <Register/>} />
            <Route path="/about" element={ <About/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  
  )
}

export default App
