import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";


export default function MyTest() {
    const [data, setData] = useState([]);    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(y=>y.json())
        .then(y=>{
            setData(y)
        })
    }, [])
    return (
        <div>
            {
                data.map((x)=>{
                    return (
                        <div>
                            {x.title}
                        </div>
                    )
                })
            }
        </div>
    )
    
}