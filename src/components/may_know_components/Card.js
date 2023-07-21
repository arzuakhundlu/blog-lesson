import React from 'react'
import { Link } from 'react-router-dom'

function Card({user,slider}) {
  return (
    <div className="card" style={{transform:`translateX(-${slider}px)`,transition:'2s'}}>
      <div  className="card_img" >
        <img src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png" alt=""/>
      </div>
        <Link to={`/userdata/${user.id}`} className="card_title">{user.name}</Link>
        <button className="card_btn">Add Firend</button>
    </div>
  )
}

export default Card