import React, { useEffect, useState } from 'react'

export default function FormData() {

    let hobbies = ["Reading", "Music", "Sports", "Travelling"];

    const [data, setData] = useState(
        {
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: true,
            hobbies: []
        }

    )

    const myData = (e) => {
        let d = data.hobbies;
        if (e.target.type == "checkbox") {
            if (e.target.name == "hobbies") {
                if (e.target.checked == true) {
                    d.push(e.target.value);
                    setData({ ...data, [e.target.name]: d })
                }
                if(e.target.checked == false){
                    d.filter((x)=>{
                        if(x.checked == true){
                            return true;
                        }
                    })
                    setData({...data, [e.target.name]: d})
                }                
            }
            else {
                setData({ ...data, [e.target.name]: e.target.checked });
            }
        }

        else {
            setData({ ...data, [e.target.name]: e.target.value });

        }

    }

    const mySubmit = (e) => {
        console.log(e)
        e.preventDefault();
        console.log(data);
    }

    const myStyle = {
        display: "inline-block"
    }


    return (
        <div>
            <form onSubmit={mySubmit}  >
                <div className='form-group'>
                    <label>title</label>
                    <input type="text" name='title' onChange={myData} />
                </div>

                <div className='form-group'>
                    <label>FirstName</label>
                    <input type="text" name='firstName' onChange={myData} />
                </div>

                <div className='form-group'>
                    <label>LastName</label>
                    <input type="text" name='lastName' onChange={myData} />
                </div>
                <div className='form-group'>
                    <label>email</label>
                    <input type="text" name='email' onChange={myData} />
                </div>
                <div className='form-group'>
                    <label>password</label>
                    <input type="text" name='password' onChange={myData} />
                </div>
                <div className='form-group'>
                    <label>confirmPassword</label>
                    <input type="text" name='confirmPassword' onChange={myData} />
                </div>
                <div className='form-group'>
                    <label>Terms and Con</label>

                    <input type="checkbox" name='acceptTerms' onClick={myData} />
                </div>
                <fieldset>
                    <div className='form-group'>
                        <legend>Hobiies</legend>

                        {
                            hobbies.map((x) => {
                                return (
                                    <div style={myStyle}>
                                        <input type="checkbox" name="hobbies" onClick={myData} value={x} />
                                        <label>{x}</label>
                                    </div>
                                )
                            })
                        }

                        {/* <input type="checkbox" name='hobbies' onClick={myData} value='Sports'/>
                        <label>Sports</label>

                        <input type="checkbox" name='hobbies' onClick={myData} value='Music'/>
                        <label>Music</label>

                        <input type="checkbox" name='hobbies' onClick={myData} value='Reading'/>
                        <label>Reading</label>

                        <input type="checkbox" name='hobbies' onClick={myData} value='Travelling'/>
                        <label>Travelling</label> */}

                    </div>
                </fieldset>
                <input type="submit" value="Save" />

            </form>


        </div>
    )
}
