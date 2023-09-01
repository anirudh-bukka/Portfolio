import React, {useEffect, useState} from 'react'
import axios from 'axios';

// Projects & Hackathons Cards

function ProjectCard() {

  const [hackathons, setHackathons] = useState([]);
  const fetchHackathons = async() => {
    const response = await axios.get(`http://localhost:3001/hackathons/`);
    const data = response.data;
    setHackathons(data["hackathons"]);
  };

  useEffect(() => {
    fetchHackathons()
  },[]);

  return (
    <>
      {/* {hackathons.length > 0 && hackathons.map((hackathon, idx) => { */}
        {/* return ( */}
        <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg text-[#007aff] font-bold'>Ensemble Learning Model for Gender Recognition Using the Human Voice</p>
              <p className='text-lg font-bold text-right'>Research Paper</p>
            </div>
            <p className='my-1'><i>August'23</i></p>
            <p className='my-1'>Implemented ensemble learning model combining various machine learning algorithms to classify gender into ’male’ or ’female’ based on the voice data from pre-processed wave signals after research.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg text-[#007aff] font-bold'>HPAIR'22</p>
              <p className='text-lg font-bold'>Delegate</p>
            </div>
            <p className='my-1'><i>October'22</i></p>
            <p className='my-1'>Delegate at Harvard Project for Asian and International Relations and participated at Impact Challenge and delivered solutions for socio-economic issues faced by the rural and backward sections of the nation.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg text-[#007aff] font-bold'>Megathon 2022</p>
              <p className='text-lg font-bold'>Hackathon</p>
            </div>
            <p className='my-1'><i>October'22</i></p>
            <p className='my-1'>Awarded Certificate of Merit at IIIT Hyderabad's annual national hackathon</p>
          </div>
        {/* ); */}
      {/* })} */}
    </>
  )
}

export default ProjectCard;