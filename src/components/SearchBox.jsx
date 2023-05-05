'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Handlers
  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='flex space-x-4 items-center justify-between max-w-6xl mx-auto px-5'
    >
      <input 
        type="text" 
        placeholder='Search keywords...' 
        onChange={e => setSearch(e.target.value)}
        className='w-full h-14 flex-1 rounded-sm placeholder-gray-500 outline-none bg-transparent'
      />
      <button 
        type="submit"
        disabled={!search}
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  )
}
