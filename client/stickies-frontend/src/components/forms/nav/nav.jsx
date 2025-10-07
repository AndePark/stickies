import { Link } from 'react-router-dom'
import { StickerText } from '../../stickertext/StickerText'
import { 
  FaHome, 
  FaUser, 
  FaCog, 
  FaBell, 
  FaSearch,
  FaBars,
  FaTimes 
} from 'react-icons/fa'
import { useState } from 'react'

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left side - Menu button (mobile) and Search */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Search icon */}
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <FaSearch size={20} />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="relative h-10 flex items-center justify-center h-[35px] w-[125px] pl-[50%]">
                <StickerText >Stickies</StickerText>
              </div>
            </Link>
          </div>

          {/* Right side - Navigation items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home */}
            <Link 
              to="/" 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors"
              title="Home"
            >
              <FaHome size={20} />
            </Link>

            {/* Notifications */}
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors relative">
              <FaBell size={20} />
              {/* Notification badge */}
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <Link 
   
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors"
              title="Profile"
            >
              <FaUser size={20} />
            </Link>

            {/* Settings */}
            <Link 
        
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors"
              title="Settings"
            >
              <FaCog size={20} />
            </Link>
          </div>

          {/* Mobile menu button for profile (when menu is closed) */}
          <div className="md:hidden">
            {!isMenuOpen && (
              <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <FaUser size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <FaHome className="mr-3" size={18} />
                Home
              </Link>
              
              <button className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <FaBell className="mr-3" size={18} />
                Notifications
                <span className="ml-auto h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              <Link
                to="/profile"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <FaUser className="mr-3" size={18} />
                Profile
              </Link>
              
              <Link
                to="/settings"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <FaCog className="mr-3" size={18} />
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
