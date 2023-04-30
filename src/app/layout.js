import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Header from '@/components/Header';
import Providers from './Providers';

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
