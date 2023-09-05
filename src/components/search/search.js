import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-4 gap-2'><input style={{boxShadow:"1px 3px 9px",border:"2px solid #0b5ed7" ,borderRadius:'10px',outline:"none",width:"40%",padding:"10px 15px"}} placeholder='search' onChange={e=>setSearch(e.target.value)}/>
    <button onClick={(e)=>{e.preventDefault()}} style={{boxShadow:"1px 3px 9px"}} className='btn btn-primary fs-5'>Search</button></form>
  )
}

export default Search;