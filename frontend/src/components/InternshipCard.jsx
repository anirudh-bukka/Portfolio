import React from 'react'

function InternshipCard() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
            <p className='text-lg'>[Company Name]</p>
            <p className=' text-lg'>[Internship/Volunteering]</p>
        </div>
        <p className=''>[Description]</p>
        <p className=''>[Dates & Duration]</p>
    </div>
  )
}

export default InternshipCard;