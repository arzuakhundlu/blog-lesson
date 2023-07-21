import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/login/Register'
import MainPage from './pages/MainPage'
import './style/style.css'
import './style/login.css'
import ProfilPage from './pages/ProfilPage'
import UserDataPage from './pages/UserDataPage'
import ShareBlogPage from './pages/ShareBlogPage'
import { useDispatch } from 'react-redux'
import { getLoginData } from './actions/MainAction'

function App() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
      if(localStorage.getItem('blogMainToken')){
        dispatch(getLoginData())
        .then(resp=>{
          if(resp=='error'){
            navigate('/login')
          }
        })
      }else{
        navigate('/login')
      }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/blog' element={<ShareBlogPage/>} />
        <Route path='/profile' element={<ProfilPage/>} />
        <Route path='/userdata/:id' element={<UserDataPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      
    </>
  )
}

export default App