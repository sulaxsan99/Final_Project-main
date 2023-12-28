// ** Thuva ** //

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css'; // Import your login page styles here
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
    const navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
            )
            .required('Password is required'),
    });

    const handleAdminLogin = async (values) => {
        try {
            if (values.email === 'admin@example.com' && values.password === 'adminPassword123@') {
                toast.success('Admin Login successful', { autoClose: 3000 });
                localStorage.setItem('valid', 'admin');
                localStorage.setItem('email', values.email);
                navigate('/Admin'); // Redirect to the Admin page
            } else {
                // Handle user login here
                const response = await axios.post('http://localhost:5001/v1/login', values);
                console.log(response.data.token);
                toast.success('User Login successful', { autoClose: 3000 });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', values.email);
                // window.alert(localStorage.getItem("email"));
                navigate('/User'); // Redirect to the User page
            }
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data || 'An error occurred';
            toast.warning(errorMessage, { autoClose: 3000 });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='loginpage'>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values) => {
                        handleAdminLogin(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="login-form">
                                <div >
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        style={{
                                            width: '100%',
                                            margin:"10px",
                                            padding: '0.5rem',
                                            backgroundColor: '#66b3ff',
                                            fontSize: '18px',
                                            border: 'none',
                                            
                                        }}
                                    />
                                    <ErrorMessage name="email" component="div" className='text-danger' />
                                </div>
                                <div >
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        style={{
                                            width: '100%',
                                            padding: '0.5rem',
                                            backgroundColor: '#66b3ff',
                                            fontSize: '18px',
                                            border: 'none',
                                            margin:"10px",

                                        }}
                                    />
                                    <ErrorMessage name="password" component="div" className='text-danger'    />
                                </div>
                                <button className="login-button" type="submit">
                                    Login
                                </button>
                                <div className="forgot-password">
                                    <a href="ForgotPassword">Forgot password?</a>
                                </div>
                                <div >
                                    <p className="create-account-button">Don't have Account?  <span onClick={()=>{
                                        navigate('/signup')
                                    }}> SignUp</span> </p>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
