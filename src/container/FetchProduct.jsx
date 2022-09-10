import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { GetProductData } from '../action/index';

export default function FetchProduct() {
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(y => {
                dispatch(GetProductData(y))
            })

    }, [])

  return (
    <div></div>
  )
}
