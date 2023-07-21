import React from 'react'
import UserData from '../components/profil/UserData'
import ProfilPage from './ProfilPage'

function UserDataPage() {
  return (
    <div>
        <ProfilPage btnVisiblePosition={false} />
        <UserData/>
    </div>
  )
}

export default UserDataPage