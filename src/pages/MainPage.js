import React from 'react'
import Header from '../components/headerNav/Header'
import Main from '../components/Main'
import MayKnowComponents from '../components/may_know_components/MayKnowComponents'

function MainPage() {
  return (
    <div>
        <Header/>
        <main>
          <MayKnowComponents/>
          <Main/>
        </main>
    </div>
  )
}

export default MainPage