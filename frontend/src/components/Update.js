import React,{useState} from 'react'
// import './Update.css'
import Axios from 'axios'

function Update() {

    const[db,setDb] = useState(null);

    const getJoke = () => {
        Axios.get("http://localhost:5000/db").then(
            (response) => {
                console.log(response.data);
                setDb(response.data);
            }
        )
    }
    const consul = () => {
        console.log(db);

    }

  return (
      <>
        <div className='title'>Update</div>
        <button onClick={getJoke}>Get data right now</button>
        <button onClick={consul}>click me</button>
        <p id='para'></p>
      </>
  )
}

export default Update