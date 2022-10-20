import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div className="form-title">Login here</div>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="" required />
                </div>
                
                <div className='form-control'>
                    <button className='login-btn'>SignUp</button>
                    <p>New to ema-john <Link to='/signin' >sign up</Link></p>
                </div>
            </form>
        </div>
    ); 
};

export default Login;