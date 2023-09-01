import React from 'react';
import BlogPageComponent from '../components/BlogPageComponent';

function Blog() {
  return (
    <div className='flex flex-col'>
      <p className='text-5xl font-bold text-center my-3 text-[#007aff]'>Blog</p>
      <BlogPageComponent />
    </div>
  )
}

export default Blog;