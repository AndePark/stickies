import {StickerText} from './components/StickerText/StickerText'
import './App.css'
import {LoginForm} from './components/Forms/Login'
import {SignupForm} from './components/Forms/Signup'
import {Nav} from './components/Forms/Nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Banner} from './components/Banner/Banner'
import {StickerGalleryItem} from './components/StickerProduct/StickerGalleryItem'
import {useEffect, useState} from 'react'
import {fetchProducts} from './api/products'


function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetchProducts('products').then(data=> {
      setProducts(data)
      console.log(data)}
    ).catch(err=> console.error(err))
  },[])


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
                    <p className="text-gray-500">This is were the AI Prompt Section Will Be.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-9">
                {products.map(product=>(
                  <StickerGalleryItem product={product}/>
                ))
                }
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
