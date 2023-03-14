import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    console.log(user);

    if (loading) return <h1>Loading...</h1>
    if (!user) route.push('/auth/login')
    if (user)
        return (
            <div>
                <h1>Welcome to your dashboard <span className='font-medium'>{user.displayName}</span></h1>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </div>
        )
}

export default Dashboard