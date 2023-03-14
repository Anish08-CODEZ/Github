'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

export const metadata = {
  title: 'Linking Project',
  description: 'Created by @anishdubey',
}


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          {/* <nav className="bg-gray-900 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <Link href='/' className="text-white text-2xl font-bold cursor-pointer transition hover:text-blue-300">My Site</Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/about" className="text-gray-300 transition-all hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                  <Link href="/contact" className="text-gray-300 transition-all hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav> */}
          <Navbar />

          <div className='w-full flex flex-col justify-center items-center mt-5'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
