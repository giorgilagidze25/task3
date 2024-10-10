import React from 'react'
import './Card.css'

export default function Card({name, age, desc='no desc', bg, imgsrc}) {


  return (
      <div className='Card' style={{background: bg}}>
        <img src={imgsrc} alt="" className='imgs' />
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <p>{desc}</p>
       
    </div>
  )
}
