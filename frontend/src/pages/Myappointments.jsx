import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const Myappointments = () => {

const { doctors } = useContext(AppContext)

  return (
    <div>
       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
       <div>
          {doctors.slice(0,3).map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b mb-6' key={index}>
              <div>
                <img className='w-32 bg-blue-100' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600 '>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-neutral-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium '>Date & Time:</span> 3, August, 2025 | 11:30 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-blue-400 hover:text-white transition-all duration-300'>Pay Online</button>
                <button  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-500 hover:text-white transition-all duration-300' >Cancel Appointment</button>
              </div>
            </div>
          ))}
       </div>
    </div>
  )
}

export default Myappointments