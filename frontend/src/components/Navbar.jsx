import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import About from '../pages/About';

function Navbar() {
  return (
    <div className="font-marbyProBold outline w-full p-1 mt-[1px] flex flex-row justify-between lg:max-h-16 lg:min-h-16 z-50">
        <div className="w-[30%] flex flex-row justify-between lg:p-2">
            <Link to="/" className='lg:max-h-12 outline p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Home</Link>
            <Link to="/projects" className='lg:max-h-12 outline p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Projects</Link>
            <Link to="/blog" className='lg:max-h-12 outline p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Blog</Link>
            <Link to="/about" className='lg:max-h-12 outline p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'><About /></Link>
        </div>
        <div className="flex flex-row justify-between lg:p-2">
            <button className='outline p-2 rounded-lg hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Dark Mode</button>
        </div>
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