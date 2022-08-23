import React from 'react'

export default function DataTable({ data , deleteFunc, editFunc}) {

    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }

    return (
        <div style={myStyle}>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Contact-Name</th>
                        <th scope="col">Contact-Number</th>
                        <th scope="col">Contact-Type</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            return (
                                <tr>
                                    <td scope='col'>{value.contactName}</td>
                                    <td scope='col'>{value.contactNumber}</td>
                                    <td scope='col'>{value.contactType}</td>
                                    <td scope='col'><button className='btn btn-primary' onClick={(e)=>{editFunc(e,data,index)}}>Edit</button></td>
                                    <td scope='col'><button className='btn btn-danger' onClick={(e)=>{deleteFunc(e,data,index)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}
