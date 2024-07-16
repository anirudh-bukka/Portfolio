import React, { useEffect, useState } from 'react'
import ProjectImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import axios from "axios";

function ProjectPageComponent() {

  const [projects, setProjects] = useState([]);
  const fetchProjects = async() => {
    const response = await axios.get(`https://portfolio-9pqsoxvhx-anirudh-bukka.vercel.app/projects`);
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
        return <div key={idx} className='flex flex-col mx-auto lg:w-[75%] sm:w-full mb-2 border-2 rounded-lg p-3 text-center hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
          <p className='text-[#007aff] text-xl font-semibold'>{project.title}</p>
          <img src={ProjectImage} alt="" className='py-5 h-80'/>
          <p className='text-lg'>{project.description}</p>
          <div className='flex flex-row justify-center mt-5'>
              <a href={project.githubLink}><img src={Github} alt="Link to GitHub Repo" className='w-10 mx-5  hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff] mb-1' /></a>
              <a href={project.deploymentLink}><img src={Deployment} alt="Link to GitHub Repo" className='w-10 mx-5  hover:bg-white hover:shadow-md hover:border-0 hover:rounded-lg duration-200 hover:border-b-2 hover:border-[#007aff] mb-1' /></a>
          </div>
        </div>
      })} 
    </>
  )
}

export default ProjectPageComponent;