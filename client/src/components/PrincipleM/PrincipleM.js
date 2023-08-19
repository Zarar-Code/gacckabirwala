import React, {useState, useEffect} from 'react'
import {  urlFor, client } from '../../client'
import './PrincipleM.css'

const PrincipleM = () => {
  const  [pricipal, setPricipal] = useState([])

  useEffect(() => {

    const query = '*[_type == "principal"]';
  
    client.fetch(query)
    .then((data)=>{
      setPricipal(data);
    })
    
  }, [])
  return (
    <>
     {
     pricipal?.map((curElem)=>(
      <>
    <div className="principle_M_cont" data-aos="fade-up">
        <div className="pContent">
       <h2>{curElem.name}</h2>
        <h5>{curElem.stdname}</h5>
        <p>{curElem.message}</p>
        </div>
        <div className="pImage">
            <img src={urlFor(curElem.pimage)} alt="" />
            <h5>Principal Khabirwala</h5>
        </div>
    </div>
    </>
     ))
    }
    </>
  )
}

export default PrincipleM