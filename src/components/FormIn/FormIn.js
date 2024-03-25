import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';

const initialState = {
  email: '',
  password: '',
};

const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Please enter valid email'
    ),
});

function FormIn(props) {
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
        return (
          <Form>
            <Field name='email' placeholder='type your email' />
            <ErrorMessage name='email' />
            <Field name='password' placeholder='type your password' />
            <ErrorMessage name='password' />
            <button type='submit'>Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormIn;
