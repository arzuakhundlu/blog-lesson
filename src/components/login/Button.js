import React from 'react'

function Button({btnText,bntAction,btnDisable}) {
  return (
    <div>
        <button disabled={btnDisable} onClick={(e)=>bntAction(e)} className="button login__submit" id="logBtn">
            <span className="button__text">{btnText}</span>
            <i class="button__icon fas fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default Button