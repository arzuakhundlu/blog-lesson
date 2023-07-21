import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/MainAction'
import { changeStateValue } from '../../redux/MainReducer'
import Card from './Card'
import SectionHeader from './SectionHeader'
import Skeleton from './Skeleton'

function MayKnowComponents() {
  const allUsers=useSelector(state=>state.Data.allUsers)
  const [slider,setSlider]=useState(0)
  // const [skeleton,setSkeleton]=useState(true)
  const skeletonStatus=useSelector(state=>state.Data.skeletonStatus)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
    // setInterval(() => {
    //   setSkeleton(false)
    // }, 2000);
    setInterval(()=>{
      dispatch(changeStateValue({
        name:"skeletonStatus",
        value:false
      }))
    },2000)
  },[])
  console.log(allUsers);
  console.log(slider);
 
  useEffect(()=>{
    if(slider>(allUsers.length-4)*200){
      setSlider(0)
    }else if(slider<0){
      setSlider((allUsers.length-6)*225)
    }
  },[slider])
  return (
    <section>
        <div className="container">
          <SectionHeader/>
          {skeletonStatus?
          <div className="may_know_container">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          </div>
          :<div className="may_know_container">
              {
                allUsers.map((user,i)=>{
                  return(
                    <Card
                    key={i}
                    user={user}
                    slider={slider}
                    />
                  )
                })
              }
        </div>}
            <div className='sliderBtns'>
              <button className='leftBtn' onClick={()=>setSlider(slider+200)}><i class="fa-solid fa-arrow-right"></i></button>
              <button className='rightBtn' onClick={()=>setSlider(slider-200)}><i class="fa-solid fa-arrow-left"></i></button>
            </div>
    </div> 
    </section>
  )
}

export default MayKnowComponents