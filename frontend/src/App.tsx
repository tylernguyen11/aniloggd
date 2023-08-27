import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import {Anime, CreateAccount, Lists, Members, SignIn, Home} from './pages/'
import Navbar from './components/Navbar'
import AnimeDetails from './components/AnimeDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar/>
        
      </header>
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/anime/:mal_id" element={<AnimeDetails/>} />
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
