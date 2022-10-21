import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const SignUp = () => {
    const [error,setError] = useState(null);
    const {createUser} = useContext(AuthContext); 
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email,password,confirm);
        if(password !== confirm){
            setError('Password did not match');
            return;
        }
        if(password.length < 6){
            setError('Password should be 6 or more character');
            return;
        }
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) => console.error(error));
    }
    return (
        <div className='form-container'>
            <div className="form-title">Signup here</div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className='form-control'>
                    <button className='login-btn'>Signup</button>
                    <p>Already have an account? <Link to='/login' >Login</Link></p>
                    <p className='error-title'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;