import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useLogin } from '../useLogin/useLogin';
import { useForm } from '../Form/formhook';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const login = useLogin()//axios
    const navigate = useNavigate()
  
    const { values, changeHandler, submitHandler } = useForm({
        email: '',
        password: ''
    }, async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/')
            // Handle successful login, e.g., redirect to another page
        } catch (err) {
            console.log(err.message);
            
        }
    });
    return (
        <section id='login-page' className='auth'>
            <form id='login' onSubmit={submitHandler}>
                <div className='container'>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id='email'
                        name='email'
                        value={values.email}
                        onChange={changeHandler} />
                    <label type="login-pass">Password:</label>
                    <input type="password"
                        id='login-password'
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input type='submit' className='btn submit' value="Login"/>
                </div>
            </form>
        </section>
    );
};

export default Login;
