import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tour from './Tour';

export default function Tours() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
            .then(y => {
                setData(y.data);
            })
    },[])

    console.log(data)
    const mystyle = {
        display: "flex",
        flexWrap: "wrap"
    };

    const sortPrice = () => {
        setLoad(!load);

        !load ? 
            setData([...data].sort(function compare(a, b) {
                if (a.price > b.price) {
                    return -1;
                }
            }))
        
        : 
            setData([...data].sort(function compare(a, b) {
                if (a.price < b.price) {
                    return -1;
                }
            }))
        

    }

    const sortTitle = () => {
        setData(
            [...data].sort(function compare(a, b) {
                if (a.title > b.title) {
                    return 1;
                }
                else {
                    return -1;
                }
            })
        )
    }

    return (
        <div>
            <button onClick={() => { sortPrice() }}>Price</button>
            <button onClick={() => { sortTitle() }}>Name</button>
            <div style={mystyle}>

                {
                    data.map((element) => {

                        return (<Tour myData={element} > </Tour>)

                    })
                }

            </div>
        </div>
    )
}