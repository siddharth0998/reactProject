import React, { useState } from 'react'
import ReactSelect from 'react-select';

export default function FullForm() {

    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }

    const [state, setState] = useState({
        form: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            language: [],
            mobile: "",
            gender: null,
            zipcode: "",
            country: "",
            acceptTerms: false,
        },
        formErrors: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            language: [],
            mobile: "",
            gender: null,
            country: "",
            acceptTerms: false,
        }
    })

    const languageList = [
        { value: "english", label: "English" },
        { value: "hindi", label: "Hindi" },
        { value: "spanish", label: "Spanish" },
        { value: "german", label: "German" }
    ];

    const countryList = [
        { value: "india", label: "India" },
        { value: "us", label: "US" },
        { value: "australia", label: "Australia" },
        { value: "Canada", label: "Canada" }
    ];

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const { form, formErrors } = state;
        let formObj = {};
        if (name === 'language') {
            if (checked) {
                formObj = { ...form };
                formObj[name].push(value);
            }
            else {
                formObj = { ...form, [name]: form[name].filter(x => x !== value) };
            }
        }
        else if(name === 'acceptTerms'){
            if(checked){
                formObj = {...form, [name]: true};
            }
            else{
                formObj = {...form, [name]: false};
            }
        }
        else {
            formObj = { ...form, [name]: value };
        }

        //if (!Object.keys(formErrors).includes(name)) return;

        let formErrorsObj = {};

        if (name === 'password' || name === 'confirmPassword') {
            let refValue = state.form[name === 'password' ? 'confirmPassword' : 'paassword']
            const errorMsg = validateField(name, value, refValue);
            formErrorsObj = {...formErrors, [name]: errorMsg};
        }
        else{
            const errorMsg = validateField(name, value);
            formErrorsObj = {...formErrors, [name]: errorMsg};
        }
        setState({...state,form: formObj, formErrors: formErrorsObj});
    }

    const validateField = (name, value, refValue) => {
        let errorMsg = null;
        switch (name) {
            case 'name':
                if (!value) errorMsg = 'please enter name.';
                else if(!/^[A-Za-z ]{2,30}$/.test(value)) errorMsg = "name should be alphabetic and between 2 to 30 character."
                break;
            case 'email':
                if (!value) errorMsg = 'please enter email.'
                else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value)
                )
                    errorMsg = 'please enter valid email.'
                break;
            case 'password':
                if (!value) errorMsg = 'please enter password.'
                else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value))  errorMsg = 'password must contain 1 special,1 Upper,1 Lower,1 number character and length should be between 6-16 character.'
                //else if (refValue && value !== refValue) errorMsg = 'password and confirmPassword does not match.'
                break;
            case 'confirmPassword':
                if (!value) errorMsg = 'please enter confimPassword'
                else if (refValue && value !== refValue) errorMsg = 'password and confirmPassword does not match.'
                break;
            case 'language':
                if (value.length === 0) errorMsg = 'please select language.'
                break;
            case 'mobile':
                if (!value) errorMsg = 'please enter mobile number.'
                else if(!/^[0-9]{10}$/.test(value)) errorMsg = 'only digits and length should be 10 character only.'
                break;
            case 'gender':
                if (!value) errorMsg = 'please select gender.'
                break;
            case 'country':
                if (!value) errorMsg = 'please select country.'
                break;
            case 'acceptTerms':
                if(!value) errorMsg = 'please check accept terms.'
                break;    
            default:
                break;

        }
        return errorMsg;
    }

    const validateForm = (form, formErrors, validateFunction)=>{
          const errorObj = {};
          Object.keys(formErrors).map(x=>{
            let refValue = null;
            if(x === 'password' || x==="confirmPassword"){
                refValue = form[x==='password' ? 'confirmPassword' : 'password'];
            }
            const msg = validateFunction(x, form[x], refValue);
            if(msg) errorObj[x] = msg;
          })
          return errorObj;
    };

    const handleSubmit = ()=>{
          const {form, formErrors} = state;
          const errorObj = validateForm(form, formErrors, validateField);
          if(Object.keys(errorObj).length !==0){
            setState({...state, formErrors: errorObj});
            return false;
          }
          console.log("Data: ", form);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='md col-6 sm col-12 auto'>

                    <form style={myStyle}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name='name' value={state.form.name} onChange={handleChange} onBlur={handleChange} />
                            { state.formErrors.name &&
                            (<span className='err'>{state.formErrors.name}</span>)
                            }
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name='email' value={state.form.email} onChange={handleChange} onBlur={handleChange} />
                            { state.formErrors.email &&
                            (<span className='err'>{state.formErrors.email}</span>)
                            }
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' value={state.form.password} onChange={handleChange} onBlur={handleChange} />
                            { state.formErrors.password &&
                            (<span className='err'>{state.formErrors.password}</span>)
                            }
                        </div>
                        <div className="mb-3">
                            <label for="confirmPassword" className="form-label">ConfirmPassword</label>
                            <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' value={state.form.confirmPassword} onChange={handleChange} onBlur={handleChange} />
                            { state.formErrors.confirmPassword &&
                            (<span className='err'>{state.formErrors.confirmPassword}</span>)
                            }
                        </div>

                        <div className='mb-3'>
                            <label className='mr-3 auto'>Language:<span className="asterisk">*</span></label>
                            <div>
                            {languageList.map((x, i) => {
                                return (
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label" for="inlineCheckbox1" key={i}>
                                            <input className="form-check-input" type="checkbox" name="language" value={x.value} onChange={handleChange} />
                                            {x.value}</label>
                                    </div>
                                )
                            })}
                            </div>
                            { state.formErrors.language &&
                            (<span className='err'>{state.formErrors.language}</span>)
                            }
                        </div>

                        <div className="mb-3">
                            <label for="mobile" className="form-label">Mobile</label>
                            <input type="text" className="form-control" id="mobile" name='mobile' value={state.form.mobile} onChange={handleChange} onBlur={handleChange} />
                            { state.formErrors.mobile &&
                            (<span className='err'>{state.formErrors.mobile}</span>)
                            }
                        </div>

                        <div className='mb-3'>
                            <label>Gender: </label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio3" value="others" onChange={handleChange} />
                                <label class="form-check-label" for="inlineRadio3">Others</label>
                            </div>
                            <div>
                            { state.formErrors.gender &&
                            (<span className='err'>{state.formErrors.gender}</span>)
                            }
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="zipcode" className="form-label">ZipCode</label>
                            <input type="text" className="form-control" id="zipcode" name='zipcode' onChange={handleChange} />
                        </div>

                        <div className='mb-3'>
                            <label for='country' className='form-label'>Country</label>
                            <ReactSelect
                                name="country"
                                options={countryList}
                                value={countryList.find(x => x.value === state.form.country)}
                                onChange={e =>
                                    handleChange({
                                        target: {
                                            name: "country",
                                            value: e.value
                                        }
                                    })
                                }
                            />
                             { state.formErrors.country &&
                            (<span className='err'>{state.formErrors.country}</span>)
                             }
                        </div>

                        <div className="mb-3">
                          <div>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="acceptTerms" onChange={handleChange} />
                            <label className="form-check-label" for="exampleCheck1">Aceept Terms</label>
                            </div>
                            <div>
                            { state.formErrors.acceptTerms &&
                            (<span className='err'>{state.formErrors.acceptTerms}</span>)
                            }
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
