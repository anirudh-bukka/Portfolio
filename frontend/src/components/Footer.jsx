import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='sm:p-1 mt-2 pb-2 mb-[1px] flex flex-col w-full border-t-2 bg-[#ffff] sticky bottom-0'>
        <div className='flex flex-row justify-center pt-2'>
            <Link className='p-2 mx-2 hover:text-[#007aff] duration-200 font-bold'>Email Me</Link>
            <Link className='p-2 mx-2 hover:text-[#007aff] duration-200 font-bold'>Hire Me</Link>
            <Link className='p-2 mx-2 hover:text-[#007aff] duration-200 font-bold'>Resumé</Link>
            {/* <Link className='outline p-2 mx-2 rounded-lg bg-[#ffc900] font-marbyProReg hover:bg-[#90A8ED] hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-2 hover:border-b-2 hover:border-black'>Resumé</Link> */}
        </div>
        {/* <div className='flex flex-col text-center pt-1'>
            <p className='font-marbyProBold text-lg'>Designed and Made by Anirudh Bukka</p>
            <p className='font-marbyProReg'>Using React JS, Tailwind CSS, MongoDB, Node & Express</p>
        </div> */}
    </div>
  )
}

export default Footer;