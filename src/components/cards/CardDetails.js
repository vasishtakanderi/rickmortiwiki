import React from 'react'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Gender from '../filters/Category.js/Gender';
const CardDetails = () => {
    let api;
    let {id} = useParams();
    let [fetchedData,updateFetchedData] = useState([]);
    const {gender,name,image,origin,species,type,location,status} = fetchedData;
    useEffect(()=>{
        (async function(){
    let api = `https:/rickandmortyapi.com/api/character/${id}`
    let data =  await fetch(api).then(res=>res.json())
    updateFetchedData(data);
    })()
      },[api])
  return (
    <div className="container d-flex justify-content-center">
        <div className='d-flex flex-column gap-3'>
    <h1 className='text-center'>{name}</h1>
     <img src={image} alt={name} className='image-fluid'/>
     
        {
            (()=>{if(status==="Alive"){
               return <div className='badge bg-success fs-5'>{status}</div>
            }
             else if(status==="Dead"){
                return <div className='badge bg-danger fs-5'>{status}</div>
             }
             else{
                return <div className='badge bg-secondary fs-5'>{status}</div>
             }
        })()
        }
    <div className='content'>
        <div className=''>
            <span className='fw-bold'>Gender : </span>
            {gender}
        </div>
        <div className=''>
            <span className='fw-bold'>Species :</span>
            {species}
        </div>
        <div className=''>
            <span className='fw-bold'>Type :</span>
            {type===""?"unknown":type}
        </div>
        <div className=''>
            <span className='fw-bold'>Location :</span>
            {location?.name}
        </div>
        <div className=''>
            <span className='fw-bold'>Origin :</span>
            {origin?.name}
        </div>
       
    </div>
       
        </div>
    </div>
  )
}

export default CardDetails;