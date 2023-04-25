import React from 'react';
import ReactLogo from '../assets/logos/react.svg';
import MongoLogo from '../assets/logos/mongodb.svg';
import JavaLogo from '../assets/logos/java.svg';

function HomePage() {
  return (
    <div className='lg:p-3 sm:p-1 outline flex flex-col w-full'>
        <div className='flex flex-col py-2'>
            <p className='font-marbyProBold text-2xl'>Hi, I'm</p>
            <p className="font-marbyProBold text-5xl pb-2">Anirudh</p>
            <p className='font-marbyProReg text-lg'>I do Web Development in Java Spring Boot, MERN stack | Data Analysis and Machine Learning in Python | Guitar, Keyboard, Drums | Basketball</p>
            <p className='font-marbyProBold text-lg pb-2'><i>Inspired by big dreams and dank memes.</i></p>
        </div>
        <p className='text-center font-marbyProBold lg:text-3xl sm:text-2xl'>Technologies</p>
        <div className='flex flex-row justify-evenly mb-5'>
            <img src={JavaLogo} alt="Java" className='lg:h-[87.5px] lg:w-[87.5px] p-2 sm:h-[50px] outline rounded-lg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'/>
            <img src={ReactLogo} alt="ReactJS" className='lg:h-[87.5px] lg:w-[87.5px] p-2 sm:h-[50px] outline rounded-lg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'/>
            <img src={MongoLogo} alt="MongoDB" className='lg:h-[87.5px] lg:w-[87.5px] p-2 sm:h-[50px] outline rounded-lg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'/>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
            <p>Hi</p>
        </div>
        <div className='flex flex-row justify-around'>
            <p className='outline rounded-lg w-1/3 mx-5 text-center font-marbyProReg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>LeetCode</p>
            <p className='outline rounded-lg w-1/3 mx-5 text-center font-marbyProReg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Devpost</p>
            <p className='outline rounded-lg w-1/3 mx-5 text-center font-marbyProReg hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>Kaggle</p>
        </div>
    </div>
  )
}

export default HomePage;