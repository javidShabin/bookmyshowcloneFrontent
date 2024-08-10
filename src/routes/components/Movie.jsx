import React from 'react'
import { useLoaderData } from 'react-router-dom'

export async function loader({params}) {
    const response = await fetch(`http://localhost:4000/movies/${params.movieId}`)
    const movie = await response.json()
    console.log(movie)
    return {movie}
}

export default function Movie() {
    const {movie} = useLoaderData()
  return (
    <>
    <main className='relative h-[60vh] flex flex-col justify-center items-center' style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 05), rgba(0, 0, 0, 0.5)), url(${movie.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='conatiner w-[90%] flex justify-rounded gap-5 items-center'>
      <img src={movie.thumbnail} alt="" className='w-[250px] rounded-lg ' />
      <h2 className='text-[50px] font-extrabold text-white'>{movie.title}</h2>
      </div>
      <button className='bg-red-700 px-7 py-2 absolute bottom-[5rem] left-[23rem] rounded-lg font-medium'>Book Now</button>
    </main>
    <p className='text-black text-[18px] font-medium px-32 mt-5'>{movie.description}</p>
    </>
  )
}
