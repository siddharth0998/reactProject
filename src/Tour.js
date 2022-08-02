import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

export default function Tour(data) {

    const text = data.myData.description
    const [value, setValue] = useState(true);
    const result = value ? text.slice(0, 200) : text

    const display = () => {
        setValue(!setValue);
    }
    console.log(data.myData.rating.rate)
    if (text.length > 200) {
        return (

            <div className="card" style={{ width: "18rem" }}>
                <img src={data.myData.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{data.myData.title}</h5>
                    <h2 className="card-title">{data.myData.price}</h2>
                    <p className="card-text">{result}</p>
                    <button onClick={display}>ReadMore</button>
                    <p claaName="card-text">{data.myData.rating.rate}</p>
                    <StarRatings StarRatings
                        rating={data.myData.rating.rate}
                        starRatedColor="#d19e06"
                        starDimension="15px"
                        numberOfStars={5} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={data.myData.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{data.myData.title}</h5>
                    <h2 className="card-title">{data.myData.price}</h2>
                    <p className="card-text">{result}</p>
                    <p claaName="card-text">{data.myData.rating.rate}</p>
                    <StarRatings StarRatings
                        rating={data.myData.rating.rate}
                        starRatedColor="#d19e06"
                        starDimension="15px"
                        numberOfStars={5} />
                </div>
            </div>
        )
    }
}
