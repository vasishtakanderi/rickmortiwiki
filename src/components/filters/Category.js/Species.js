import React from 'react'
import FilterBTN from '../FilterBTN'
const Species = ({setSpeices,setPageNumber}) => {
  let species = ['Human','Alien','Humanoid','Poopybutthole','Mythological','Unknown','Animal','Disease','Robot','Cronenberg','Planet']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      Species
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
{
  species.map((items,index)=>(<FilterBTN task={setSpeices} setPageNumber={setPageNumber} key = {index} items={items} name="speices" index={index}/>))
}
    
      </div>
    </div>
  </div>
  )
}

export default Species