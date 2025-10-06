import {StickerText} from './components/stickertext/StickerText'
import './App.css'
import {LoginForm} from './components/forms/login'
import {SignupForm} from './components/forms/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <StickerText text="Stickies">
              Stickies
            </StickerText>

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
    </Router>
  )
}

export default App
