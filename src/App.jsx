import React from 'react'
import Header from './Compo/Header'
import BasicTabs from './Compo/Nav'
import Course from './Compo/Course'
import KeyTopics from './Compo/KeyTopics'
import Instructor from './Compo/Instructor'
import SimpleSlider from './Compo/Slider'

const App = () => {
  
  return (
    <div className='  '>
      <Header/>
      <BasicTabs/>
      <Course/>
      <KeyTopics/>
      <Instructor/>
      <SimpleSlider/>
      
    </div>
  )
}

export default App
