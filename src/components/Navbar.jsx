import React from 'react';

// Components
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex justify-center items-center space-x-4 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}
