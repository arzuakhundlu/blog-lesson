import React from 'react'
import { useDispatch } from 'react-redux'
import {changeStateValue} from '../../redux/MainReducer'

function Input({type,placeholder,icon,name,value}) {
  const dispatch=useDispatch();
  function getInpValue(e){
    dispatch(changeStateValue({
      name:e.target.name,
      value:e.target.value
    }))
  }
  return (
      <div class="login__field">
          <i class={`login__icon fas ${icon}`}></i>
          <input onChange={(e)=>getInpValue(e)} name={name} value={value} type={type} id="logEmail" className="login__input" placeholder={placeholder}/>
      </div>
  )
}

export default Input