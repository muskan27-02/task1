import React from 'react'

export default function Item(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <img src={props.img} width="200" height="200"/>
        <h5>PRICE : {props.price}$   ||  IN STOCK : {props.stock}pcs || {props.star}/5 STAR</h5>

    </div>
  )
}
