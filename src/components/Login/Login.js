import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (user) {
        navigate('/shop')
      }
    

    const handleCreateUser = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
        
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required/>

                    </div>
                    {loading && <p>loading...</p>}
                    <p>{error?.message}</p>
                    <button className="form-submit">Login</button>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create An Account</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;