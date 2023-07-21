import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../../redux/MainReducer'

function InputEdit({type,label,id,name,value}) {
  const dispatch = useDispatch()
  function getInpValue(e){
    dispatch(changeStateValue({
      name:e.target.name,
      value:e.target.value
    }))
  }
  return (
         <div class="input_container">
            <label for={id}>{label}</label>
            <input value={value} onChange={(e)=>getInpValue(e)} name={name} id={id} required type={type} />
        </div>
  )
}

export default InputEdit