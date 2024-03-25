import React from 'react'

const HomeCard = ({ logo, title}) => {
  return (
    <div className='text-center bg-slate-200 h-48 w-48 rounded-xl shadow-lg mt-8'>
        <div className='ml-20 pt-8'>
            {logo}
        </div>
        <h2 className='mt-8 font-bold' >{title}</h2>
    </div>
  )
}

export default HomeCard