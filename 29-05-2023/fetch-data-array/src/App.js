
import {useState } from 'react';
import './App.css';
import { NewObjcets } from './component/array';

function App() {
let api = "https://reqres.in/api/users/"

let [array,setArr] = useState([])
async function handlegetUser(){

    const response = await fetch(api).then((res)=>res);
    const arr = await response.json();
    setArr(arr.data)
  
}

  return (
    <div className="App">
  {array.map((el,index) => {
    return <NewObjcets   indexs={el}
    key={array.id}
    />
  
  })}
  <button onClick={handlegetUser}> Click it </button>
     
    </div>
  );
}

export default App;