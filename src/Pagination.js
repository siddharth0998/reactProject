import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pagination() {

    const [data1, setData] = useState({});

    useEffect(() => {

        axios.get("https://jsonmock.hackerrank.com/api/articles?page=1")
            .then(y => {
                setData(y.data);
                console.log(y.data)
            })

    },[])
    
    
        return (

            <div>
                {
                    data1?.data?.map((x,index) => {
                        return (
                            <div key={index}>
                                <h3>{index}</h3>
                                <h3>{x.title}</h3>
                                <p>{x.author}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    
}
