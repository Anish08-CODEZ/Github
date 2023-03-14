"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../utils/firebase';

const UserDashboard = () => {
    const [user, loading] = useAuthState(auth);

    const route = useRouter();

    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='text-3xl text-blue-700 font-bold'>User Dashboard</h1>

            {loading && 
                <h1>Loading...</h1>
            }
            {!user && route.push('/auth/login')}
            {user && (
                <>
                    <h3 className='text-xl'>Welcome to your dashboard <span className='font-medium'>{user.displayName}</span></h3>

                    <button className='py-2 mt-5 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8 transition-all  hover:bg-gray-700 hover:drop-shadow-lg' onClick={() => auth.signOut()}>Sign Out</button>
                </>
            )}
        </div>
    )
}

export default UserDashboard;