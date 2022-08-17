import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import moment from 'moment'

export default function FormikYupForm() {

    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }

    const countryList = [
        { value: "india", label: "India" },
        { value: "us", label: "US" },
        { value: "australia", label: "Australia" },
        { value: "canada", label: "Canada" },
        { value: "japan", label: "Japan" },
    ];

    const languageList = [
        { value: "english", label: "English" },
        { value: "hindi", label: "Hindi" },
        { value: "spanish", label: "Spanish" },
        { value: "arabic", label: "Arabic" },
        { value: "german", label: "German" },
    ];

    const initialValues = {
        fullName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        gitHub: "",
        age: "",
        birthDate: "",
        gender: "",
        language: [],
        country: "",
        acceptTerms: false,
    }

    const validationSchema = () => {
        return Yup.object().shape({
            fullName: Yup.string().required('Fullname is required')
                .min(2, 'FullName must be at least 2 characters')
                .max(20, 'FullName must not exceed 20 characters'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            mobileNumber: Yup.string().required("Mobile Number is required.").phone('IN', true, '${path} is invalid'),
            password: Yup.string()
                .required('Password is required')
                .matches(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one Special case Character"
                )
                .min(6, 'Password must be at least 6 characters')
                .max(20, 'Password must not exceed 20 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            gitHub: Yup.string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    'Enter correct url!'
                )
                .required('Please enter website'),
            age: Yup.number().required('Age is required')
                .min(18),
            birthDate: Yup.string()
                .required("DOB is Required")
                .test(
                    "DOB",
                    "Please choose a valid date of birth",
                    (date) => moment().diff(moment(date), "years") >= 18
                ),
            gender: Yup.string().required('please select gender'),
            language: Yup.array().min(2).max(4),
            country: Yup.string().required('please select country'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),

        })
    }

    const handleSubmit = (data) => {
        console.log(data);
    }




    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                <div className='container'>
                    <div className='row'>
                        <div className='md col-6 sm col-12 auto'>
                            <Form style={myStyle}>

                                <div className="mb-3">
                                    <label htmlFor='fullName'>Full Name</label>
                                    <Field name="fullName" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email"> Email </label>
                                    <Field name="email" type="email" className="form-control" />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mobileNumber"> MobileNumber </label>
                                    <Field name="mobileNumber" type="number" className="form-control" />
                                    <ErrorMessage
                                        name="mobileNumber"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password"> Password </label>
                                    <Field name="password" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword"> ConfirmPassword </label>
                                    <Field name="confirmPassword" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="gitHub"> GitHub </label>
                                    <Field name="gitHub" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="gitHub"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="age"> Age </label>
                                    <Field name="age" type="number" className="form-control" />
                                    <ErrorMessage
                                        name="age"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="birthDate"> BirthDate </label>
                                    <Field name="birthDate" type="date" className="form-control" />
                                    <ErrorMessage
                                        name="birthDate"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="gender"> Gender : </label>
                                    <div class="form-check form-check-inline">
                                        <Field name="gender" type="radio" className="form-check-input" value="male" />
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <Field name="gender" type="radio" className="form-check-input" value="female" />
                                        <label class="form-check-label" for="inlineRadio1">Female</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <Field name="gender" type="radio" className="form-check-input" value="others" />
                                        <label class="form-check-label" for="inlineRadio1">Others</label>
                                    </div>
                                    <ErrorMessage
                                        name="gender"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label>Language :</label>
                                    <div>
                                        {
                                            languageList.map((x, i) => {
                                                return (
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" for="inlineCheckbox1" key={i}>
                                                            <Field name="language" type="checkbox" className="form-check-input" value={x.value} />
                                                            {x.value}
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <ErrorMessage
                                        name="language"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label for='country' className='form-label'>Country</label>
                                    <Field name='country' as='select' className='form-select' >
                                    <option value="" disabled hidden>Select Country</option>
                                    {countryList.map((x)=>{
                                        return (
                                        <option value={x.value}>{x.value}</option>
                                        )
                                    })}
                                    </Field>
                                    <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label>AceeptTerms :</label>
                                    <Field name="acceptTerms" type="checkbox" className="form-check-input" />
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>

                            </Form>
                        </div>
                    </div>
                </div>

            </Formik>
        </div>
    )
}
