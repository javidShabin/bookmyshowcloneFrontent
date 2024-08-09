import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'

export default function Home() {
    // Get movie form the api
    const [movies, setMovies] = useState([])
    const getAllMovie = async () => {
        const response = await fetch('http://localhost:4000/movies')
        const movies = await response.json()
        setMovies(movies)
    }

    // Use Effect hook
    useEffect(()=>{
        // Get movie function
        getAllMovie()
    },[])
    
  return (
    <main>
        <section>
            {movies.map((movie) => {
                return <MovieCard key={movie._id} movie={movie}/>
            })}
        </section>
    </main>
  )
}
