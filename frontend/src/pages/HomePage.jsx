import React from 'react';
import { Link } from 'react-router-dom';
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

import ReactLogo from '../assets/icons/react.svg';
import MongoLogo from '../assets/icons/mongodb.svg';
import JavaLogo from '../assets/icons/java.svg';
import SpringBoot from '../assets/icons/springboot.svg';
import DataAnalysis from '../assets/icons/data_analysis.svg';
import Python from '../assets/icons/python.svg';
import Git from '../assets/icons/git.svg';
import MySQL from '../assets/icons/sql.svg';
import Github from '../assets/icons/github.svg';
import dpBackground from '../assets/pictures/svg0.svg';
import ProjectCard from '../components/ProjectCard';
import InternshipCard from '../components/InternshipCard';

function HomePage() {
  return (
    <div className='sm:p-1 mt-2 flex flex-col w-full'>
        <div className='flex lg:flex-row lg:justify-between'>
            <div className='flex flex-col p-2 w-2/3'>
                <p className='text-6xl font-semibold'>Hi, I'm</p>
                <p className="text-8xl pb-2 font-semibold text-[#007aff]">Anirudh</p>
                <p className='text-xl'>I do Web Development in Java Spring Boot, MERN stack | Data Analysis and Machine Learning in Python | Guitar, Keyboard, Drums | Basketball</p>
                <p className='text-lg font-bold'><i>Inspired by big dreams and dank memes.</i></p>
            </div>
            <div>
                <img src={dpBackground} alt="dp" className='lg:h-70 lg:w-full p-2' />
            </div>
        </div>
        <div className='flex flex-col justify-between mb-3 mt-3'>
            <p className='text-center   lg:text-3xl sm:text-2xl mb-5 font-bold text-[#007aff]'>Skills</p>
            <div className='flex lg:flex-row lg:justify-evenly mb-5 sm:flex-col'>
                    <img src={JavaLogo} alt="Java" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
                    <img src={ReactLogo} alt="ReactJS" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
                    <img src={MongoLogo} alt="MongoDB" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
                    <img src={SpringBoot} alt="Spring Boot" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    <img src={Python} alt="Python" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    <img src={DataAnalysis} alt="Data Analysis" className='llg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    <img src={Git} alt="Git" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    <img src={Github} alt="GitHub" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    <img src={MySQL} alt="MySQL" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]' />
                    {/* <img src={MySQL} alt="MySQL" className='lg:h-14 lg:w-14 p-2 sm:h-[50px] hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black' /> */}
            </div>
        </div>
        <div className='flex flex-row justify-around pb-4 p-2 max-h-12'>
            <Link to="https://leetcode.com/anidude09/" className='border-2 rounded-lg w-1/3 mx-5 text-center hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'>LeetCode</Link>
            <Link to="https://www.kaggle.com/anirudhbukka" className='border-2 rounded-lg w-1/3 mx-5 text-center hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'>Kaggle</Link>
        </div>
        <div className='flex flex-col mt-3 '>
            <p className='  text-3xl text-center font-bold text-[#007aff]'>Experience</p>
            <div className='flex flex-row justify-evenly'>
                <p className='  text-2xl'>Projects & Hackathons</p>
                <p className='  text-2xl'>Internships & Volunteering</p>
            </div>
            <div className='flex flex-row justify-evenly'>
                {/* <div className='flex flex-col outline rounded-lg w-1/3 p-3 m-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
                    <p className='  text-lg'>[Project Name]</p>
                    <p className=' '>[Project Details]</p>
                    <p className=' '>[Project Dates]</p>
                </div> */}
                <Link className='flex flex-col border-2 rounded-lg w-1/3 p-3 m-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'><ProjectCard /></Link>
                <div className='block rounded-lg left-1/2 bottom-0 w-0.5 h-32 bg-black'>
                </div>
                {/* <div className='flex flex-col outline rounded-lg w-1/3 p-3 m-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
                    <p className='  text-lg'>[Company Name]</p>
                    <p className=' '>[Internship Details]</p>
                    <p className=' '>[Duration]</p>
                </div> */}
                <Link className='flex flex-col border-2 rounded-lg w-1/3 p-3 m-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'><InternshipCard /></Link>
            </div>
        </div>
    </div>
  )
}

export default HomePage;

/*

<div class="relative p-5">
                        <div class="mt-40">
                            <div class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div class="p-2">
                                    <p class="text-lg text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button class="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Visit site
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
<VerticalTimeline>
                {timelineContent.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            //  iconstyle={workIconStyles}
                            //   icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p id="description">{element.description}</p>
                            {showButton && ( 
                                <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
*/