import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactSelect from 'react-select';

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
        gender: null,
        language: [],
        country: "",
        acceptTerms: false,
    }



    const validationSchema = () => {

    }

    const handleSubmit = () => {

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
                                </div>

                                <div className='mb-3'>
                                    <label for='country' className='form-label'>Country</label>
                                    <ReactSelect
                                        name="country"
                                        options={countryList}
                                        // value={countryList.find(x => x.value === state.form.country)}
                                        // onChange={e =>
                                        //     handleChange({
                                        //         target: {
                                        //             name: "country",
                                        //             value: e.value
                                        //         }
                                        //     })
                                        // }
                                    />
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

                            </Form>
                        </div>
                    </div>
                </div>

            </Formik>
        </div>
    )
}
