import React from 'react';
import { auth, googleAuthProvider } from '../../firebase';

const Login = () => {
    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleAuthProvider);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}

export default Login