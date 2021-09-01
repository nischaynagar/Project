import React,{useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [count,setCount] = useState(0)

  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(function(response) {
        setValue({
          fname : response.data[count].name,
          lname : response.data[count].email
        })
    })
  },[count])



const [value,setValue] = useState({
  fname : "",
  lname: ""
});
const [ide,setIde] = useState(-1)

const [list,setList] = useState([])

function increment(e){
  setCount(count+1);
  e.preventDefault();
}


function updateid(id,e){
  
  setValue(list[id]);
  setIde(id);

  e.preventDefault();
  
}
function updateid1(e){
  setList(list => {
    return list.map((item,index) => {
      if(index === ide){
        return value;
      }else{
        return item;
      }
    })
  })
  // setIde(-1);
  // setValue({
  //   fname : "",
  //   lname : ""
  // })
  e.preventDefault();
}



function add(e){
  setList(prev => {
    return [...prev,value]
  })
  // setValue({
  //   fname : "",
  //   lname : ""
  // })
 
  e.preventDefault();
}

function delid(id,e){
  
  setList(prev => {
    return list.filter((item,idx) => {
      return idx !== id
    })
  })
 
}

function handleChange(event) {
  const {name,value} = event.target;
 
  setValue(prev => {
    return {
      ...prev, 
    [name] : value
    }
  })
}

  return (
    <div className="container">

    <div className="jumbotron text-center">  

    <h4>{count}</h4>
      <h4> Name: {value.fname}   </h4>
      <h4> email: {value.lname}   </h4>
    
      
      <input className="form-control w-25 mx-auto my-2" type="text" name="fname" value={value.fname} onChange={handleChange} />
      <input className="form-control w-25 mx-auto my-2" type="text" name="lname" value={value.lname} onChange={handleChange}/>
      
      <button className="btn btn-primary mx-3 px-5 rounded-pill" onClick={add} >Add</button>
      <button className="btn btn-primary mx-3 px-5 rounded-pill"  onClick={updateid1}>Update</button>
      <button className="btn btn-primary mx-3 px-5" onClick={ increment} >Increment</button>


     
</div>

    
    
   
      <div className="d-flex d-flex-center">
      
{
  
  list.map((item, index) => {
    return(
     
      <div key={index} className="jumbotron text-center p-3 w-25 m-3 " >
     
        <h3 className="p-3">{item.fname} {item.lname} </h3>
        
        
        <button className="btn btn-primary mx-4 p-2" onClick={(e)=>{ delid(index,e)}} >Delete</button>
  
      <button className="btn btn-primary mx-4 p-2" onClick={(e)=>{ updateid(index,e)}}>Update</button>
      </div>
    )
  })
}
</div>

    </div>
  );
}

export default App;
