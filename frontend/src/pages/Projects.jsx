import React from 'react';
import ProjectPageComponent from '../components/ProjectPageComponent';

function Projects() {
  return (
    <div className='flex flex-col'>
      <p className='text-5xl font-bold text-center my-3 text-[#007aff]'>Projects</p>
      <ProjectPageComponent />
    </div>
  )
}

export default Projects;