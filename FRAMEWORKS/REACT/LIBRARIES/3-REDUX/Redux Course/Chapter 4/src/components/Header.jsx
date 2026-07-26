import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-transparent sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          {/* Logo/Title */}
          <Link 
            to="/" 
            className="text-2xl sm:text-3xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
          >
            ***Chapter 4***<br/>
            Redux Blog
          </Link>

          {/* Navigation */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-row items-center justify-center sm:justify-end gap-3">
              <li>
                <Link 
                  to="/"
                  className={`rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a] transition-[border-color] duration-[0.25s] hover:border-[#646cff] ${
                    location.pathname === '/'
                      ? 'border-[#646cff]'
                      : ''
                  }`}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link 
                  to="/post"
                  className={`rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a] transition-[border-color] duration-[0.25s] hover:border-[#646cff] ${
                    location.pathname.startsWith('/post')
                      ? 'border-[#646cff]'
                      : ''
                  }`}
                >
                  Add Post
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
