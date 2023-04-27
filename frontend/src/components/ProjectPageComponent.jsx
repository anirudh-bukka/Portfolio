import React from 'react'
import ProjectImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';

function ProjectPageComponent() {
  return (
    <div className='flex flex-col mx-auto lg:w-[75%] sm:w-full outline p-3 text-center'>
        <p className='text-[#007aff] text-xl font-semibold'>[Title]</p>
        <img src={ProjectImage} alt="" className='py-5 h-80'/>
        <p className='text-lg'>[Description]</p>
        <div className='flex flex-row justify-center mt-5'>
            <img src={Github} alt="Link to GitHub Repo" className='w-10 mx-5' />
            <img src={Deployment} alt="Link to GitHub Repo" className='w-10 mx-5' />
        </div>
    </div>
  )
}

export default ProjectPageComponent;