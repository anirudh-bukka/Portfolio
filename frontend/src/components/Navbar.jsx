import React from 'react';
import { BrowserRouter, Route, Routes, Link, useMatch, useResolvedPath } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Blog from '../pages/Blog';

function Navbar() {
  return (   
    <div className="border-b-2 w-full p-1 mt-[1px] flex flex-row justify-around lg:max-h-16 lg:min-h-16 z-50 bg-white bg-opacity-90 sticky top-0">
        <div className="w-[30%] flex flex-row justify-between lg:p-2">
            <Link to="/" className='lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Home</Link>
            <Link to="/projects" className='lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Projects</Link>
            <Link to="/blog" className=' lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>Blog</Link>
            <Link to="about" className=' lg:max-h-12 p-2 rounded-lg hover:text-[#007aff] duration-200'>About</Link>
            {/* <Link to="about" className='bg-white hover:bg-[#23a094] hover:text-white lg:max-h-12 hover:outline-black p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>{<About />}</Link> */}
        </div>
        {/* <div className="flex flex-row justify-between lg:p-2">
            <button className='outline p-2 bg-black text-white hover:bg-cyan-400 hover:text-black rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Dark Mode</button>
        </div> */}
    </div>
  )
}

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }

export default Navbar;