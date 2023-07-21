import React from 'react'

function AboutUser({title,value,id}) {
  return (
        <>
            <li id={id}>
                <span>{title}</span> 
                <span>{value}</span>
            </li>
        </>
  )
}

export default AboutUser