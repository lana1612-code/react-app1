import React from 'react'

export default function product(props) {
    console.log(props);
  return (
  <div className="product"><h2>{props.title}</h2><p className="text-bg-dark ">{props.desc}</p></div>

  )
}
/*

*/