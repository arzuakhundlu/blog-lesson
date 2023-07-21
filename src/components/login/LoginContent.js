import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions/MainAction'
import Button from './Button'
import Input from './Input'

function LoginContent() {
  const login =useSelector(state=>state.Data.login)
  const [btnDisable,setBtnDisable] = useState(false)

  const dispatch=useDispatch()

  const navigate=useNavigate()
  function loginBtn(e){
    e.preventDefault();
    if(login.email !='' && login.password !=''){
      setBtnDisable(true);
      dispatch(loginUser(login))
      .then(resp=>{
        if(resp=="success"){
          navigate('/')
        }
        console.log(resp);
        setBtnDisable(false)
      })
    }
  }
  return (
        <div className="screen__content">
            <form className="login">
                <Input name='login.email' value={login.email} type='email' placeholder='Email' icon='fa-user'/>
                <Input name='login.password' value={login.password} type='password' placeholder='Password' icon='fa-lock'/>
                <Button btnDisable={btnDisable} bntAction={loginBtn} btnText='Log In Now'/>
                <p id="logMsg"></p>			
            </form>
        </div>
  )
}

export default LoginContent