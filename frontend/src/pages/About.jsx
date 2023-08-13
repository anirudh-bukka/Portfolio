import React from 'react';
import dpBackground from '../assets/pictures/svg0.svg';
import Guitar from '../assets/icons/guitar.svg';
import Keyboard from '../assets/icons/piano.svg';
import Drums from '../assets/icons/drum.svg';
import Instagram from '../assets/logos/instagram.svg';
import Discord from '../assets/logos/discord.svg';
import Facebook from '../assets/logos/facebook.svg';
import Twitter from '../assets/logos/twitter.svg';
import LinkedIn from '../assets/logos/linkedin.svg';

import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='flex flex-col justify-center p-2'>
      <div className='flex lg:flex-row justify-evenly sm:flex-col sm:justify-center'>
        <div className='flex flex-col text-center'>
          <p className='sm:my-2 mt-auto font-bold text-[#007aff] text-5xl text-center'>Anirudh Bukka</p>
          <p className='mb-auto mt-3'>B.Tech in IT @ VNRVJIET <br /> 2020-2024<br />Hyderabad, Telangana, India</p>
        </div>
        <img src={dpBackground} alt="My Face" className='h-60 w-60 align-middle sm:mx-auto sm:my-2' />
      </div>
      <p className='text-xl py-3 text-center'>I am a Junior year student pursuing B.Tech in Information Technology from Hyderabad, India.
Always open to network be it work or music. I have a deep interest in Data Science and Web development and always trying to contribute to open source organisations and projects. </p>
      <p className='text-xl py-3 text-center font-semibold'>I co-founded a networking community in Discord, where people (mostly students) can come grow, have fun and share knowledge! <br /> <i>We are back to the drawing board to expand the purpose, experience and one big suprise.</i></p>
      <Link to="https://www.linkedin.com/company/efcctcommunity/" className='mx-auto border-2 rounded-lg w-1/3 text-center hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'>EFCCT</Link>
      <div className='flex flex-col mt-5'>
        <p className='text-xl py-3 text-[#007aff] font-semibold italic text-center'>I am an avid music enthusiast.</p>
        <div className='flex flex-row justify-evenly'>
          <img src={Guitar} alt="Guitar" className='lg:h-20 lg:w-20 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
          <img src={Keyboard} alt="Keyboard" className='lg:h-20 lg:w-20 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
          <img src={Drums} alt="Drums" className='lg:h-20 lg:w-20 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:rounded-lg duration-200 hover:shadow-[#007aff]'/>
        </div>
      </div>
      <div className='mt-5 flex flex-col justify-center'>
        <p className='text-[#007aff] font-semibold italic text-center'>Connect with me</p>
        <div className='flex flex-row justify-center'>
          <img src={LinkedIn} alt="LinkedIn" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/>
          <img src={Discord} alt="Discord" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/>
          <img src={Twitter} alt="Twitter" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/>
          <img src={Instagram} alt="Instagram" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/>
          <img src={Facebook} alt="Facebook" className='mx-1 lg:h-10 lg:w-10 p-2 sm:h-[50px] hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff]'/>
        </div>
      </div>
    </div>
  )
}

export default About;