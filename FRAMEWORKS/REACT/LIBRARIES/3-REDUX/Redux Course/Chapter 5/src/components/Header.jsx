import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {incrementCounter, getCount } from '../features/posts/postsSlice'

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
 
  return (
    <header className="bg-transparent sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          {/* Logo/Title */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
          >
            C-5 Performance
          </Link>

          {/* Navigation */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-row items-center justify-center sm:justify-end gap-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => { return isActive ? 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a]  duration-[0.25s] shadow-sm shadow-white' : 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a] duration-[0.25s] hover:border-[#646cff]' }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/post"
                  className={({ isActive }) => { return isActive ? 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a]  duration-[0.25s] shadow-sm shadow-white' : 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a] duration-[0.25s] hover:border-[#646cff]' }}
                >
                  AddPost
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) => { return isActive ? 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a]  duration-[0.25s] shadow-sm shadow-white' : 'rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a] duration-[0.25s] hover:border-[#646cff]' }}
                >
                  Users
                </NavLink>
              </li>
              <li>
                <button onClick={handleIncrement} className='rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium text-white bg-[#1a1a1a]  duration-[0.25s] shadow-sm shadow-white'>
                  {count}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
