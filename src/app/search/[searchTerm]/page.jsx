import React from 'react';

// Components
import Results from '@/components/Results';

export default async function SearchPage({params}) {
  const API_KEY = process.env.API_KEY;
  const searchTerm = params.searchTerm;
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`;
  
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();
  const results = data.results;

  if (results && results.length === 0) {
    return <h1 className='text-center pt-6'>No result found</h1>;
  }

  return results && <Results results={results} />;
}
