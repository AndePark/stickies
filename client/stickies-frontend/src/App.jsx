import {StickerText} from './components/stickertext/StickerText'
import './App.css'
import {LoginForm} from './components/forms/login'
import {SignupForm} from './components/forms/signup'
import {Nav} from './components/forms/nav/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Banner} from './components/banner/banner'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <div className="h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Next Section</h2>
                  <p className="text-lg text-gray-600">The sticker animates down into this section as you scroll!</p>
                  <div className="mt-8 p-8 bg-white rounded-lg shadow-lg">
                    <p className="text-gray-500">This is where the animated sticker would land after scrolling down from the banner above.</p>
                  </div>
                </div>
              </div>
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
