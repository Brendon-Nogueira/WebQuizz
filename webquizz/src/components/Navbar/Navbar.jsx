 import styles from './Navbar.module.css'
 import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className={styles.navbar} >
        <NavLink to="/" className={styles.brand}> Web <span>Quizz</span>   </NavLink>
        <ul className={styles.links}> 
            <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>

            <li> 
                <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
            </li>

            <li> 
                <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Register</NavLink>
            </li>

            <li> 
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
            </li>

        </ul>

       
        
    </nav>
  )
}

