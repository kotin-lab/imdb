'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(null);

  // Hooks
  useEffect(() => {
    setCurrentTheme(theme === 'system' ? systemTheme : theme);
  }, [theme, systemTheme]);

  return (
    <>
      {currentTheme && currentTheme === 'dark'
        ? (
          <MdLightMode 
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('light')}
          />
        )
        : (
          <BsFillMoonFill
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('dark')} 
          />
        )
      }
    </>
  )
}
