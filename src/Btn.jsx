import React from 'react'

export default function Btn({postPerPage, totalPosts, changePage}) {

    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPosts/postPerPage); i++){
         pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
          {pageNumbers.map(number=>(
            <li key={number} className='page-item'>
              <a className='page-link' onClick={()=>{changePage(number)}} >
                  {number}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  )
}
