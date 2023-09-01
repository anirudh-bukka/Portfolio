import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InternshipCard() {

  const [internships, setInternships] = useState([]);
  const fetchInternships = async() => {
    const response = await axios.get(`http://localhost:3001/internships/`);
    const data = response.data;
    setInternships(data["internships"]);
  };

  useEffect(() => {
    fetchInternships()
  }, []);

  return (
    <>
      {/* {internships.length > 0 && internships.map((internship, idx) => { */}
        {/* return ( */}
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>Dynamatix</p>
              <p className=' text-lg font-bold'>SDE Internship</p>
            </div>
            <p className='my-1'><i>June'23 - July'23</i></p>
            <p className='my-1'>Enhanced features of Dynamatix's flagship platform RiskHawk using Java and SQL.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>TEDx VNRVJIET</p>
              <p className=' text-lg font-bold'>Organising Team</p>
            </div>
            <p className='my-1'><i>April'23 - May'23</i></p>
            <p className='my-1'>Enhanced features of Dynamatix's flagship platform RiskHawk using Java and SQL.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>ACM VNRVJIET</p>
              <p className=' text-lg font-bold'>Volunteering & Core Team</p>
            </div>
            <p className='my-1'><i>October'22 - September'23</i></p>
            <p className='my-1'>Active member of the core team. Volunteer and speaker for multiple events at VNRVJIET.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>Lion's Club</p>
              <p className=' text-lg font-bold'>Volunteering</p>
            </div>
            <p className='my-1'><i>October'22</i></p>
            <p className='my-1'>Facilitated daily operations at Lion's Club of Meerpet Charitable Eye Hospital.</p>
          </div>
          <div className='flex flex-col border-2 rounded-lg mb-4 p-2 hover:bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>Ojas Innovative Technologies</p>
              <p className=' text-lg font-bold text-right'>Training Internship</p>
            </div>
            <p className='my-1'><i>April'22 - June'22</i></p>
            <p className='my-1'></p>
          </div>
        {/* ); */}
      {/* })} */}
    </>
  )
}

export default InternshipCard;