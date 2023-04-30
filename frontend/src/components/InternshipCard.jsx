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
      {internships.length > 0 && internships.map((internship, idx) => {
        return (
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <p className='text-lg font-bold text-[#007aff]'>{internship.name}</p>
              <p className=' text-lg font-bold'>{internship.type}</p>
            </div>
            <p className='my-1'><i>{internship.startDate} - {internship.endDate}</i></p>
            <p className='my-1'>{internship.description}</p>
          </div>
        );
      })}
    </>
  )
}

export default InternshipCard;