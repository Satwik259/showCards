import React from 'react'
// import Header from './components/header/Header'
import Landingpage from './components/landingpage/Landingpage'
import "./App.css"
import Displaycards from './components/displaycards/Displaycards'
import Recentposts from './components/recentposts/Recentposts'
const App = () => {
  return (
    <div className='main-page'>
     <Landingpage/>
     {/* <Displaycards/> */}
      {/* <img src='https://mts-random.s3.ap-south-1.amazonaws.com/suci/event/image1.JPG'/> */}
    </div>
  )
}

export default App