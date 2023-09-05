
import React from 'react'

const FilterBTN = ({name,index,items,task,setPageNumber}) => {
  return (
    <div>
     <style jsx>
    {
`
input[type="radio"]{
    display:none;
}
.x:checked + label{
background-color:#0b5ed7;
color:white
}
`
    }
     </style>
<div class="form-check">
  <input onClick = {()=>{
    task(items)
    setPageNumber(1)
  }} class="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
  <label class="btn btn-outline-primary " for={`${name}-${index}`}>{items} </label>
</div>
    </div>
  )
}

export default FilterBTN;