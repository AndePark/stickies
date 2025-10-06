import {StickerText} from './components/stickertext/StickerText'
import './App.css'
import {LoginForm} from './components/forms/login'
import {SignupForm} from './components/forms/signup'
import {Nav} from './components/forms/nav/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
            </>
          } />
          <Route path="/login" element={
            <>
              <LoginForm/>
            </>
          } />
          <Route path="/signup" element={
            <>
              <SignupForm/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
