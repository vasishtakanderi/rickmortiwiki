import React from 'react'
import Status from './Category.js/Status';
import Species from './Category.js/Species';
import Gender from './Category.js/Gender';
const Filters = ({setStatus,setPageNumber,setGender,setSpeices}) => {
  const clear = ()=>{
    setGender("");
    setPageNumber("");
    setSpeices("");
    setStatus("");
    window.location.reload(false)
  }
  return (
    <div className='col-lg-3 col-12'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div onClick = {clear} style={{cursor:"pointer"}} className='mb-4 text-center text-decoration-underline text-primary'>Clear Filters</div>
      <div className="accordion" id="accordionExample">
      <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
      <Species setSpeices={setSpeices} setPageNumber={setPageNumber}/>
      <Gender setGender={setGender} setPageNumber={setPageNumber}/>
</div>
    </div>
  )
}

export default Filters;