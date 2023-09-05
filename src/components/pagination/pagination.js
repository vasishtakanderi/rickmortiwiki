import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info,setPageNumber,pageNumber}) => {
  let [width,setWidth] = useState(window.innerWidth);
  console.log(width);
const UpdateDimensions = ()=>{
  setWidth(window.innerWidth)
}
 useEffect(()=>{
  window.addEventListener("resize",UpdateDimensions);
  return ()=>window.removeEventListener("resize",UpdateDimensions)
 })
  return (
    <>  
    <style jsx>
      {
        `
        @media (max-width:768px){
       .x{
        display:none;
       }

       .pagination{
        font-size:14px
       }
        }
        `
      }

    </style>
  <ReactPaginate className='pagination justify-content-center gap-4 my-4' 
  pageCount={info?.pages}
  nextClassName='btn btn-primary x'
  previousClassName='btn btn-primary x'
  forcePage={pageNumber===1?0:pageNumber-1}
  nextLabel="next"
  previousLabel="prev"
  activeClassName='active'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  marginPagesDisplayed={width<576 ? 1 :2}
  pageRangeDisplayed={width < 576 ? 1:2}
  onPageChange={(data)=>{setPageNumber(data.selected+1)}}
  
/>
</>

  );
  

}

export default Pagination;