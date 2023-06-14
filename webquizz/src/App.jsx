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

// components for aplication
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './pages/Search/Search'
import { Welcome } from './components/Welcome/Welcome'

//hooks
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthentication } from './hooks/useAuthentication'
import {useLoadUser} from './hooks/useLoadUser'

//context
import { AuthProvider } from './context/AuthContext'
import { QuizzProvider } from './context/QuizzContext'



function App() {

  const { auth } = useAuthentication();
  const [user, loadingUser] = useLoadUser(auth)

  if (loadingUser) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <QuizzProvider>
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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </QuizzProvider>
      </AuthProvider>

    </div>
  )
}

export default App;
