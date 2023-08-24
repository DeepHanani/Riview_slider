import React, { useState } from 'react'
import mydata from "./data.js"
import './RiviewSlider.css'

export default function RiviewSlider() {

    const[index,setIndex] = useState(0);

    const next = () => {
        if (index < mydata.length - 1) {
          setIndex(index + 1)
        }
        else {
          setIndex(0)
        }
      }
    
      const pre = () => {
    
        if (index <= 0) {
          setIndex(mydata.length - 1)
        }
        else {
          setIndex(index - 1)
        }
      }
  return (
    <div className='mainContainer'>
    <div className="card">
      <div className='imgdiv'>
      <img className="card-img-top" src={mydata[index].image} alt="Card image" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{mydata[index].name}</h4>
        <p className="card-text"> Age :{mydata[index].age}</p>
         <a href="#" className="btn btn-primary">See Profile</a>
      </div>
    </div>
    <div className='Btns'>
      <button type="button" className="btn btn-primary" onClick={pre}>prev</button>
      <button type="button" className="btn btn-primary" onClick={next}>next</button>
    </div>
  </div>
  )
}
