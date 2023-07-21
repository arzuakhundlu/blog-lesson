import React from 'react'
import Background from './Background'
import LoginContent from './LoginContent'

function Login() {
  return (
    <div className='login_body'>
      <div class="login-container">
        <div class="container">
          <div class="screen login_card">
              <LoginContent/>
              <Background/>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Login