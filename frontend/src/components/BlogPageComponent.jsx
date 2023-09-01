import React, { useEffect, useState } from 'react'
import BlogImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import axios from "axios";

function BlogPageComponent() {

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async() => {
    const response = await axios.get(`http://localhost:3001/blogs/`);
    const data = response.data;
    setBlogs(data["blogs"]);
    // console.log(data["blogs"]);
  };
  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <>
      {blogs.length > 0 && blogs.map((blog, idx) => {
        return <div key={idx} className='flex flex-col mx-auto lg:w-[75%] sm:w-full border-2 rounded-lg p-3 text-center'>
          <p className='text-[#007aff] text-xl font-semibold'>{blog.title}</p>
          <img src={BlogImage} alt="" className='py-5 h-80'/>
          <p className='text-lg'>{blog.description}</p>
          <div className='flex flex-row justify-center mt-5'>
              <a href={blog.githubLink}><img src={Github} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
              <a href={blog.deploymentLink}><img src={Deployment} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
          </div>
        </div>
      })}
      
    </>
  )
}

export default BlogPageComponent;