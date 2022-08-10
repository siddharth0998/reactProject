import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Btn from './Btn';

export default function Pagination() {

    const [data1, setData] = useState({});
    const [currentPageNumber, setPageNumber] = useState(1);
    
    const changePage = (pageNumbers) => {
        setPageNumber(pageNumbers);
    }

    useEffect(() => {
        axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${currentPageNumber}`)
            .then(y => {
                setData(y.data);
                console.log(y.data)
            })
    }, [data1])

    const totalPosts = data1.total;
    const postPerPage = data1.per_page;

    return (

        <div>
            {
                data1?.data?.map((x, index) => {
                    return (
                        <div key={index}>
                            <h3>{x.title}</h3>
                            <p>{x.author}</p>
                        </div>
                    )
                })
            }
            <Btn totalPosts={totalPosts} postPerPage={postPerPage} changePage={changePage} />
        </div>
    )

}
