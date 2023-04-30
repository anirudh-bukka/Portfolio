import React, { useEffect, useState } from 'react'
import ProjectImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import axios from "axios";

function ProjectPageComponent() {

  const [projects, setProjects] = useState([]);
  const fetchProjects = async() => {
    const response = await axios.get(`http://localhost:3001/projects/`);
    const data = response.data;
    setProjects(data["projects"]);
    // console.log(data["projects"]);
  };
  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      {projects.length > 0 && projects.map((project, idx) => {
        return <div key={idx} className='flex flex-col mx-auto lg:w-[75%] sm:w-full border-2 rounded-lg p-3 text-center'>
          <p className='text-[#007aff] text-xl font-semibold'>{project.title}</p>
          <img src={ProjectImage} alt="" className='py-5 h-80'/>
          <p className='text-lg'>{project.description}</p>
          <div className='flex flex-row justify-center mt-5'>
              <a href={project.githubLink}><img src={Github} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
              <a href={project.deploymentLink}><img src={Deployment} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
          </div>
        </div>
      })}
      
    </>
  )
}

export default ProjectPageComponent;