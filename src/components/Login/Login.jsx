import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Firebase from '../../firebase/Firebase';

const auth = getAuth(Firebase);
const googleAuth = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        signInWithPopup(auth, googleAuth)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser); 
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-center py-3 gap-5'>
                {user ? (
                    <div className='py-3'>
                        <div className='text-lg text-amber-600 font-mono'>User: { user.displayName }, Email: { user.email }</div>
                        <button onClick={handleSignOut} className='px-3 py-2 my-2'>Logout</button>
                    </div>
                ) : (
                    <div className='space-x-3'>
                        <button onClick={googleSignIn} className='px-3 py-2'>Sign in with Google</button>
                        <button className='px-3 py-2'>Sign in with GitHub</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;