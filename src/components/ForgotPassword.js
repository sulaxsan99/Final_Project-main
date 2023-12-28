// ** Thuva ** //

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ForgotPassword = () => {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      )
      .required('New password is required'),
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <Formik
        initialValues={{
          email: '',
          newPassword: '',
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post('http://localhost:5001/v1/resetPassword', values);
            console.log(response.data);
            // handle success, show a success message to the user
            resetForm();
          } catch (error) {
            console.error(error);
            // handle error, show an error message to the user
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                name="email"
                type="email"
                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <div className="input-group">
                <Field
                  name="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.newPassword && touched.newPassword ? 'is-invalid' : ''}`}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <ErrorMessage name="newPassword" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn btn-primary">Reset Password</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
