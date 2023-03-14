"use client";

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {
    GoogleAuthProvider, 
    signInWithPopup,
    FacebookAuthProvider,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Signup = () => {
    const route = useRouter();

    const [user, loading] = useAuthState(auth);

    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            route.push('/dashboard/user');
        } catch (err) {
            console.log(err);
        }
    }

    // Sign in with Facebook
    const facebookProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const credential = await FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            let photoUrl = result.user.photoURL + '?height=500&access_token=' + token;
            await updateProfile(auth.currentUser, {phototUrl: photoUrl});
            console.log(result);
            route.push('/dashboard/user');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      if(user) {
        route.push('/dashboard/user');
      } else {
        console.log('login');
      }
    }, [user])
    

  return (
    <div className='shadow-xl mt-32 p-10 text-gray-700 bg-white rounded-lg'>
        <h2 className='text-3xl font-medium'>Join Today</h2>
        <div className='py-4'>
            <h3 className='py-4'>Sign in with one of the provider</h3>
        </div>
        <div className='flex flex-col gap-4'>
            <button onClick = {GoogleLogin} className='text-white bg-gray-700 p-4 w-full font-medium flex align-middle gap-2 rounded-lg transition-all hover:scale-110 hover:bg-gray-800 hover:drop-shadow-lg'>
                <FcGoogle className='text-2xl' /> Sign in with Google
            </button>
            <button className='text-white bg-gray-700 p-4 w-full font-medium flex align-middle gap-2 rounded-lg transition-all hover:scale-110 hover:bg-gray-800 hover:drop-shadow-lg' onClick={FacebookLogin}>
                <AiFillFacebook className='text-2xl text-blue-500' /> Sign in with Facebook
            </button>
        </div>
    </div>
  )
}

export default Signup;