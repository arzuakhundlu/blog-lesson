import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

function Header() {
  const user=useSelector(state=>state.Data.user)
  console.log(user);
  return (
    <header class="row">
        <h2 class="logo">My Blog</h2>
        <div class="header_main_container justfy_center">
            <NavLink to={'/'} ><i class="fas fa-home"></i></NavLink>
            <NavLink to={'/profile'} ><i class="fas fa-user"></i></NavLink>
            <NavLink to={'/blog'} >  <i class="fas fa-blog"></i></NavLink>
            
        </div>
        <p class="user_name">
           {user.name}
        </p>
    </header>
  )
}

export default Header