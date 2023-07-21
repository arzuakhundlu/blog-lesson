import React from 'react'
import Background from './Background'
import RegisterContent from './RegisterContent'

function Register() {
  return (
    <div className='login_body'>
        <div class="login-container">
          <div class="container">
            <div class="screen login_card">
                <RegisterContent/>
                <Background/>
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default Register