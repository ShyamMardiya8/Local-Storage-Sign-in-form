import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import {HashRouter,Routes, Route, Link} from 'react-router-dom'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg  ">
        <a href="" className='navbar-brand'>Sign Page</a>
        <button 
        className="navbar-toggler"
        aria-controls='nav'
        data-bs-target='#nav'
        data-bs-toggle='collapse'
        aria-control='nav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse" id='nav'>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link">Sign_in</Link>
            </li>
            <li>
            <Link to='/Login' className="nav-link">Login</Link></li>
          </ul>
        </div>
      </nav>
      </div>
    <Routes>
      <Route path='/' element={<Form />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
    </HashRouter>
    {/* <Form /> */}
    </>
  )
}

export default App
