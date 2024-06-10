// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './firebase';
import './App.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
        setError(error.message);
        }
    };

 
    const handleGoogleSignIn = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
        } catch (error) {
        console.error("Error signing in with Google: ", error.message);
        }
    };   
    const handleGithubSignIn = async () => {
        try {
        await signInWithPopup(auth, githubProvider);
        } catch (error) {
        console.error("Error signing in with Github: ", error.message);
        }
    };
  return (
    <>
    
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
        {error && <p>Wrong credentials😒</p>}
      <div className='parties'>

        <button onClick={handleGoogleSignIn}>SignIn with Google</button>
        <button onClick={handleGithubSignIn}>SignIn with Github</button>
      </div>
      {/* {error && <p>{error}</p>} */}
      
    </div>
    </>
  );
};

export default Login;
