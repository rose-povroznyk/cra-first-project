import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

function SignUpForm(props) {
  const handleSubmitToFormik = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmitToFormik}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Field name='firstName' placeholder='type you name' />
            <ErrorMessage name='firstName' />
            <Field name='lastName' placeholder='type you surname' />
            <ErrorMessage name='lasName' />
            <Field type='email' name='email' placeholder='type you email' />
            <ErrorMessage name='email' />
            <Field
              type='password'
              name='password'
              placeholder='type you password'
            />
            <ErrorMessage name='password' component='p' />
            <button type='submit'>Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
