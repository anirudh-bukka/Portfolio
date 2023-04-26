import React from 'react'

function ProjectCard() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
            <p className='text-lg'>[Project Name]</p>
            <p className='text-lg'>[Project/Hackathon]</p>
        </div>
        <p className=''>[Description]</p>
        <p className=''>[Dates]</p>
    </div>
  )
}

// className='flex flex-col outline rounded-lg w-min-[300px] w-max-[300px] p-3 m-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'

export default ProjectCard;