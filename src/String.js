import React, { useState } from 'react'

export default function String() {

    const [data,setData] = useState("this is bana app mang")

    const correct = ()=>{
        let obj = {
            bana: "banana",
            app: "apple",
            mang: "mango",
        }
        setData(
            data.split(" ").map((x)=>{
                if(obj.hasOwnProperty(x)){
                    return(obj[x])
                }
                else{
                    return(x);
                }
            }).join(" ")
        )
    }

  return (
    <div>
        {data}
        <button onClick={()=>{correct()}}>Correct</button>
    </div>
  )
}
