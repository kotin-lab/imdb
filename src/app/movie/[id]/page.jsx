import React from 'react';
import Image from 'next/image';

async function getMovie(id) {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const res = await fetch(url);
  return await res.json();
}

export default async function MoviePage({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className='w-full p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
      <Image 
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`} 
        width={500}
        height={300}
        placeholder='blur'
        blurDataURL='/spinner.svg'
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
        alt='Movie poster'
        className='rounded-lg'
      />
      <div className="p-2">
        <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
        <p className='text-lg mb-3'>
          <span className='font-semibold'>Overview:</span>
          {' '}
          {movie.overview}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Date Released:</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Rating:</span>
          {movie.vote_count}
        </p>
      </div>
    </div>
  )
}
