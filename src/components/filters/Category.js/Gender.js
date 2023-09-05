import React from 'react'
import FilterBTN from '../FilterBTN'
const Gender = ({setGender,setPageNumber}) => {
  let gender = ["male","female","genderless","unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {gender.map((items,index)=>(<FilterBTN task={setGender} setPageNumber={setPageNumber} key={index} name="gender" index={index} items={items}/>))}
      </div>
    </div>
  </div>
  )
}

export default Gender