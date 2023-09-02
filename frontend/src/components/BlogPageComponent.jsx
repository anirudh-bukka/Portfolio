import React, { useEffect, useState } from 'react'
import BlogImage from '../assets/pictures/svg0.svg'
import Github from '../assets/icons/github.svg';
import Deployment from '../assets/icons/browser.svg';
import axios from "axios";

function BlogPageComponent() {

  // const [blogs, setBlogs] = useState([]);
  // const fetchBlogs = async() => {
  //   const response = await axios.get(`http://localhost:3001/blogs/`);
  //   const data = response.data;
  //   setBlogs(data["blogs"]);
  //   // console.log(data["blogs"]);
  // };
  // useEffect(() => {
  //   fetchBlogs();
  // }, [])

  return (
    <>
      {/* {blogs.length > 0 && blogs.map((blog, idx) => {
        return <div key={idx} className='flex flex-col mx-auto lg:w-[75%] sm:w-full border-2 rounded-lg p-3 text-center'>
          <p className='text-[#007aff] text-xl font-semibold'>{blog.title}</p>
          <img src={BlogImage} alt="" className='py-5 h-80'/>
          <p className='text-lg'>{blog.description}</p>
          <div className='flex flex-row justify-center mt-5'>
              <a href={blog.githubLink}><img src={Github} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
              <a href={blog.deploymentLink}><img src={Deployment} alt="Link to GitHub Repo" className='w-10 mx-5' /></a>
          </div>
        </div>
      })} */}
      
      <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-2xl font-bold text-[#007aff]'>The ‘design’ in finding a problem and choosing the team</p>
              {/* <p className='text-lg font-bold'>medium.com</p> */}
              <a href='https://medium.com/design-bootcamp/the-design-in-finding-a-problem-and-choosing-the-team-2f2d17255f05' className='text-white bg-[#007aff] px-2 py-1 rounded-lg hover:text-[#007aff] hover:border hover:border-[#007aff] hover:duration-200 hover:bg-white text-lg font-bold'>medium.com</a>
            </div>
            <p className='my-1'><i>7 October 2021</i></p>
            <p className='my-1 text-lg'>This blog is especially for college students looking to venture into entrepreneurship/consumer-centred design and innovation or to even solve a problem as a user.</p>
          </div>

    </>
  )
}

export default BlogPageComponent;