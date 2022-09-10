import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {AddItem} from '../action/index'
export default function DisplayProduct() {

    const mystate = useSelector((state) => state.product.items);
    const myDispatch = useDispatch();
    const myCart = (ele)=>{
        myDispatch(AddItem(ele));
    }
  return (
    <div style={{display: 'flex',flexWrap: 'wrap'}}>
    {
            mystate.map((x) => {
                return (
                    <div className="card" style={{ width: "18rem", margin : "0 0 10px 0" }}>
                        <img src={x.image} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{x.title}</h5>
                            <h2 className="card-title">{x.price}</h2>
                            <p claaName="card-text">{x.rating.rate}</p>
                        </div>
                        <button onClick={()=>myCart(x)}>AddtoCart</button>
                    </div>
                )
            })
        }
    </div>
  )
}
