//config and service
import './firebase/config'
//import { onAuthStateChanged } from 'firebase/auth'

//style
import './App.css'

//pages for aplication
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { CreatePost } from './pages/CreatePost/CreatePost'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Search } from './pages/Search/Search'

// components for aplication
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Welcome } from './components/Welcome/Welcome'
import { Questions} from './components/Questions/Questions'
import { Finish } from './components/Finish/Finish'

//hooks
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthentication } from './hooks/useAuthentication'
import {useLoadUser} from './hooks/useLoadUser'
import { useContext, useEffect } from 'react'

//context
import { AuthProvider } from './context/AuthContext'

import { QuizzContext } from './context/QuizzContext'



function App() {

  const { auth } = useAuthentication();
  const [user, loadingUser] = useLoadUser(auth)
  const [quizzState, dispatch] = useContext(QuizzContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  
  if (loadingUser) {
    return <p>Loading...</p>
  }



  return (
    <div className="App">
      <AuthProvider value={{user}}>  
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element= {!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element= {!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/about" element={<About />}/>
              <Route path="/search" element={<Search />}/>
              <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login" />}/>
              <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login" />} />
              <Route path="/welcome" element={user ? <Welcome/> : <Navigate to="/login" />} />
              <Route path="/questions" element={user ? <Questions/> : <Navigate to="/login" />}/>
              <Route path="/finish" element={user ? <Finish/> : <Navigate to="/login" />} />
    
            </Routes>

            {/*{quizzState.gameState === 'Start' && <Welcome/>}
            {quizzState.gameState === 'Playing' && <Questions/>}
            {quizzState.gameState === 'End' && <Finish/>} */}
            
          </div>
          <Footer />
        </BrowserRouter>  
      </AuthProvider>

    </div>
  )
}

export default App;
