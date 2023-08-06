import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import {Anime, CreateAccount, Lists, Members, SignIn} from './pages/'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Not MAL</h1>
        <img src="/src/assets/logo.png" width="15%" height="15%" alt="Logo" />
        <div className="App-buttons">
          {/* Buttons with links to different pages */}
          <Link to="/signin"><button>Sign In</button></Link>
          <Link to="/create-account"><button>Create Account</button></Link>
          <Link to="/anime"><button>Anime</button></Link>
          <Link to="/lists"><button>Lists</button></Link>
          <Link to="/members"><button>Members</button></Link>
        </div>
      </header>
      {/* Define routes for different components */}
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/members" element={<Members/>} />
      </Routes>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
    </Router>
  )
}

export default App
