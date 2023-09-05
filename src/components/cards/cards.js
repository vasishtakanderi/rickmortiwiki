import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
const Cards = ({results,page}) => {
    let display ; 
  if(results){
   display = results.map((x)=>{
    let {id,name,image,status,location} = x;
    return(
        <Link to={`${page}${id}`} style={{textDecoration:"none"}} key={id} className= 'text-dark col-lg-4 col-md-6 col-12 position-relative'>
            <div style={{border:"1px solid #0b56d7",borderRadius:"10px"}} className='mb-4 d-flex flex-column'>
<img src={image} style={{borderRadius:"10px 10px 0px 0px"}} className='img-fluid'/>
<div className='content px-4'>
<div className='fw-bold mb-4'>{name}</div>
<div className='fs-6'>Last loaction</div>
<div className='fs-5 mb-2'>{location.name}</div>
{(()=>{
    if(status==="Dead"){
        return <div style={{top:"10px",right:"20px"}} className='badge bg-danger position-absolute'>{status}</div>
    }
    else if(status==="Alive"){
        return <div style={{top:"10px",right:"20px"}} className='badge bg-success position-absolute'>{status}</div>
    }
    else{
        return <div style={{top:"10px",right:"20px"}} className='badge bg-secondary position-absolute'>{status}</div>

    }
})()}

</div>
            </div>
        </Link>
    )
   })
  }
  else{
    display = "No Charecters Found : /";
  }

  return (
    <>{display}</>
  )
}

export default Cards;