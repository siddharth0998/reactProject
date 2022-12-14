import React, { useState } from 'react'
import Tabel from './Tabel'

export default function Test() {

    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }

    const [state, setState] = useState({
        form: {
            name: "",
            mobileNumber: ""
        }
    })
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [edit,setEdit] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const { form } = state;
        let formObj = {};

        if (name) {
            formObj = { ...form, [name]: value };
        }
        setState({ ...state, form: formObj });
    }

    const handleSubmit = () => {
        if (!(state.form.name && state.form.mobileNumber)) {
            
        }
        else if((state.form.name && state.form.mobileNumber) && !toggle){
             data.map((x,i)=>{
                 if(i === edit){
                    const {form} = state;
                    // let newdata = [];
                    // newdata.push(form);
                    return [...data, data[i] = form];
                 }
            })
            setToggle(true);
        }
        else{
            const { form } = state;
            setData([...data, form]);
        }
    }

    const deletefunc = (e, data, index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    const editfunc = (e, data, index) => {
        let newEditData = data.find((x,i)=>{
            return i === index
        });
        let newForm = {
            form : newEditData
        } 
        setState(newForm);
        setToggle(false);
        setEdit(index);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='md col-6 sm col-12 auto'>
                        <form style={myStyle}>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' value={state.form.name} onChange={handleChange} onBlur={handleChange} />

                                <label for="mobileNumber" className="form-label">mobileNumber</label>
                                <input type="text" className="form-control" id="mobileNumber" name='mobileNumber' value={state.form.mobileNumber}
                                    onChange={handleChange} onBlur={handleChange} />

                                {toggle ?<button type='button' className="btn btn-primary" onClick={handleSubmit}>Save</button> : <button type='button' className="btn btn-primary" onClick={handleSubmit}>Edit</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Tabel data={data} deletefunc={deletefunc} editfunc={editfunc} />
        </div>
    )
}
