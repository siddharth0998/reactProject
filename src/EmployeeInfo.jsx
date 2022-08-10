import React from 'react'
import {Formik, Form, Field } from 'formik'
import axios from 'axios'

export default function EmployeeInfo() {
  return (
    <div>
        <Formik 
        
            initialValues = {{
                title: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                acceptTerms: true,
            }}

            onSubmit = {(values)=>{

                

                axios.post('http://localhost:4000/accounts/register',values)
            }}
        
        >

            <Form>

                <label>title</label>
                <Field id='title' name='title' type='text'></Field>

                <label>firstName</label>
                <Field id='firstName' name='firstName' type='text'></Field>

                <label>lastName</label>
                <Field id='lastName' name='lastName' type='text'></Field>

                <label>email</label>
                <Field id='email' name='email' type='text'></Field>

                <label>password</label>
                <Field id='password' name='password' type='text'></Field>

                <label>confirmPassword</label>
                <Field id='confirmPassword' name='confirmPassword' type='text'></Field>

                <label>acceptTerms</label>
                <Field id='acceptTerms' name='acceptTerms' type='checkbox'></Field>

                <button type="submit">Submit</button>
            </Form>

        </Formik>
    </div>
  )
}
