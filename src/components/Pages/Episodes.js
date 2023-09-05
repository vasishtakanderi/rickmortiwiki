import React,{useState,useEffect} from 'react'
import Cards from '../cards/cards';
import InputGroup from '../filters/Category.js/InputGroup';
 const Episodes = () => {
    let [id,setID] = useState(1);
    let [info,setInfo] = useState([])
    let {air_date,name} = info;
    let [results,setResults] = useState([]);
    console.log(results);
    let api = `https://rickandmortyapi.com/api/episode/${id}`;
    console.log(info);
    useEffect(()=>{
        (
            async function (){
                let data = await fetch(api).then(res=>res.json());
                setInfo(data);
                let a = await Promise.all(data.characters.map((x)=>{return fetch(x).then(res=>res.json())}))
                setResults(a);
            }
        )()
    },[api])
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='text-center'>
            Episode : {" "} 
            <span className='text-primary mb-3'>{name===""?"unknown":name}</span>
            </h1>
            <h5 className='text-center mb-3'>Air Date {air_date===""?"unknown":air_date}</h5>
        </div>
        <div className='row'>
            <div className='col-lg-3 col-12'>
         <h4 className=' text-center fw-bold mb-4'>Pick Episodes</h4>
         <InputGroup setID={setID} name="Episode" total={51}/>
         </div>
         <div className='col-lg-8 col-12'>
            <div className='row'><Cards page="/episodes/" results={results}/></div></div>
        <div></div>
        </div>
    </div>
  )
}
export default Episodes;