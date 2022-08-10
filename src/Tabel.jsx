import React, { useState } from 'react'

export default function Tabel({data,deletefunc,editfunc}) {
    const myStyle = {
        margin: "0 auto",
        width: "600px"
    }

    return (
        <div style={myStyle}>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((value,index)=>{
                        return (
                            <tr>
                        <th scope="row">{value.name}</th>
                        <td>{value.mobileNumber}</td>
                        <td><button onClick={(e)=>{editfunc(e,data,index)}}>Edit</button></td>
                        <td><button onClick={(e)=>{deletefunc(e,data,index)}}>Remove</button></td>
                    </tr>
                        )
                    })
                }
                    
                </tbody>
            </table>
        </div>
    )
}
