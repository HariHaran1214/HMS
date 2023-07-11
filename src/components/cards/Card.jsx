import React from 'react'
import { Link } from 'react-router-dom'
import AddP from '../../assets/medical.png'

function Card({title,image,link,linktext}) {
  return (
    <div className=' w-80 h-96 bg-white p-3 rounded'>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold mt-5'>{title}</span>
            <img src={image} className='w-52 h-52' />
            <Link className='px-12 py-3 mt-6 rounded-lg text-white bg-black' to={link}>{linktext}</Link>
        </div>
    </div>
  )
}

export default Card