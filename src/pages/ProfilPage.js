import React from 'react'
import Header from '../components/headerNav/Header'
import Profil from '../components/profil/Profil'

function ProfilPage({btnVisiblePosition}) {
  return (
    <div>
        <Header/>
        <Profil btnVisiblePosition={btnVisiblePosition}/>
    </div>
  )
}

export default ProfilPage