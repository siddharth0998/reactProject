import React from 'react'
import { useState } from 'react'



export default function Address() {
    const address = {
        houseNo : "A/63",
        street : "Motinagar-3, Tarsali",
        city : "vadodara",
        state : "Gujarat",
        country : "India",
    }
    
    const [value,setValue] = useState("");
    
    const setAddress = () => {
         setValue(address.houseNo + "," + address.street + "," + address.city + "," + address.state + "," + address.country)
    }

  return (
    <div>
        <button onClick={setAddress}>Show Address</button>
        {value}
    </div>
  )
}
