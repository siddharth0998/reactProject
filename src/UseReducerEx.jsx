import React, { useReducer, useState } from 'react'
import DataTable from './DataTable'

export default function UseReducerEx() {

    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }
    const [input, setInput] = useState({
        contactName: "",
        contactNumber: "",
        contactType: "",
    })
    const initialValue = []

    const myReducer = (state, action) => {
        switch (action.type) {
            case "ADD": return [...state, action.payload]
            case "DELETE":
                let newData = [...state]
                newData.splice(action.payload,1) 
            return newData
            // case "DELETE": return state.filter((value,index)=>{
            //     return index != action.payload
            // })
            case "SAVE": return state.map((value, i) => {
                if (i === action.index) {
                    return action.payload
                }
                else {
                    return value
                }
            })
            default: return state
        }
    }

    const [data, setData] = useReducer(myReducer, initialValue)
    const [toggle, setToggle ] = useState(-1);

    const myChange = (e) => {
        const { name, value } = e.target;
        let formObj = {};
        formObj = { ...input, [name]: value }
        setInput(formObj)
    }

    const mySave = (e) => {
        if (toggle >= 0) {
            setData({ type: "SAVE", payload: input, index: toggle })
            setToggle(-1)
        }
        else {
            setData({ type: "ADD", payload: input })
        }
    }

    const deleteFunc = (e, data, index) => {
        setData({ type: "DELETE", payload: index });
    }

    const editFunc = (e, data, index) => {
        setInput(data[index]);
        setToggle(index);
    }


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='md col-6 sm col-12 auto'>
                        <form style={myStyle}>
                            <div className="mb-3">
                                <label for="contactName" className="form-label">Contact-Name</label>
                                <input type="text" className="form-control" id="contactName" name='contactName' value={input.contactName}
                                    onChange={myChange} onBlur={myChange} />
                            </div>

                            <div className="mb-3">
                                <label for="contactNumber" className="form-label">Contact-Number</label>
                                <input type="text" className="form-control" id="contactNumber" name='contactNumber'
                                    value={input.contactNumber}
                                    onChange={myChange} onBlur={myChange} />
                            </div>

                            <div className='mb-3'>
                                <label for="type" className='form-label' >Contact-Type</label>
                                <select class="form-select" aria-label="Default select example" onChange={myChange} name="contactType" value={input.contactType}>
                                    <option value="" selected hidden>Select type</option>
                                    <option value="home">Home</option>
                                    <option value="work"> Work</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button type='button' className="btn btn-success" onClick={mySave}>Save</button>
                        </form>
                    </div>
                </div>
            </div>

            <DataTable data={data} deleteFunc={deleteFunc} editFunc={editFunc} />
        </div>
    )
}
