import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div className="form-title">Signup here</div>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="" id="" required />
                </div>
                <div className='form-control'>
                    <button className='login-btn'>Login</button>
                    <p>Already have an account? <Link to='/login' >Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;