import React ,{useState} from 'react'
import Button from './Button'
import Input from './Input'
import {useSelector,useDispatch} from 'react-redux'
import {registerUser} from '../../actions/MainAction'

function RegisterContent() {
  const register= useSelector(state=>state.Data.register)
  const [btnDisable,setBtnDisable] = useState(false)

  const dispatch=useDispatch()
  function loginBtn(e){
    e.preventDefault();
    if(register.name !='' && register.email !='' && register.date_of_birth !='' && register.password !=''){
      setBtnDisable(true);
      dispatch(registerUser(register))
      .then(resp=>{
        console.log(resp);
        setBtnDisable(false)
      })
    }
  }
  return (
    <div className="screen__content">
            <form className="login">
                <Input type='text' name={'register.name'} value={register.name} placeholder='Full name' icon='fa-user'/>
                <Input type='email' name={'register.email'} value={register.email} placeholder='Email' icon='fa-user'/>
                <Input type='date' name={'register.date_of_birth'} value={register.date_of_birth} icon='fa-user'/>
                <Input type='password' name={'register.password'} value={register.password} icon='fa-lock'/>
                <Button btnDisable={btnDisable} bntAction={loginBtn} btnText='Sign In Now' />
                <p id="logMsg"></p>			
            </form>
        </div>
  )
}

export default RegisterContent