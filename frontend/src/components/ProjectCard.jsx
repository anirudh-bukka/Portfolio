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
      {hackathons.length > 0 && hackathons.map((hackathon, idx) => {
        return (
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg text-[#007aff] font-bold'>{hackathon.name}</p>
              <p className='text-lg font-bold'>{hackathon.type}</p>
            </div>
            <p className='my-1'><i>{hackathon.startDate} - {hackathon.endDate}</i></p>
            <p className='my-1'>{hackathon.description}</p>
          </div>
        );
      })}
    </>
  )
}

export default ProjectCard;