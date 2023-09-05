import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './components/cards/cards'
import Filters from './components/filters/filters'; 
import Cards from './components/cards/cards';
import {useState,useEffect} from 'react';
import Pagination from './components/pagination/pagination';
import Search from './components/search/search';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Episodes from './components/Pages/Episodes';
import Loaction from './components/Pages/Location';
import CardDetails from './components/cards/CardDetails';
function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<CardDetails/>}/>
      <Route path="/location" element={<Loaction/>} />
      <Route path="/location/:id" element={<CardDetails/>}/>
      <Route path="/episodes" element={<Episodes/>} />
      <Route path="episodes/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )

}

const Home = ()=>{
  let [search,setSearch] = useState('')
  let [pageNumber,setPageNumber] = useState(1);
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("");
  let [species,setSpeices] = useState("alien");
  const [fetchedData,updateFetchedData] = useState([]);
  let {info,results} = fetchedData;
  console.log(results);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
let data =  await fetch(api).then(res=>res.json())
updateFetchedData(data);
})()
  },[api])
  return (
    <div className="App">
      <h1 className='text-center mb-3'>Charecters</h1>
    <div className='container'><Search search={search} setSearch={setSearch}/></div>
    <div className='container'>
      <div className='row'>
      <Filters setSpeices={setSpeices} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
        <div className='col-lg-8 sm-12'>
          <div className='row'>
           <Cards page="/" results={results}/>
          </div>
        </div>
      </div>
<div className='container'>
  <Pagination info={info}  pageNumber={pageNumber} setPageNumber = {setPageNumber}/>
</div>
    </div>
      </div>

  );
}

export default App;
