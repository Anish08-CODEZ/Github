import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className='flex justify-between items-center py-10'>
        <Link href={"/"}>Logo</Link>
        <ul>
          {!user && (
            <Link href={"/auth/login"}>
                <span className='py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8 transition-all  hover:bg-gray-700 hover:drop-shadow-lg'>Join Now</span>
            </Link>
            )}
            {user && (
              <div>
                <Link href={'/dashboard'}>
                  <img 
                    src={user.photoURL} 
                    alt="avatar"
                    referrerPolicy='no-referrer'
                    className='w-12 rounded-full'
                  />
                </Link>
              </div>
            )}
        </ul>
    </div>
  )
}

export default Navbar