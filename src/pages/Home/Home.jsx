import '../../App.css'
import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
// @import url(~react-responsive-ui/small-screen/Snackbar.css) (max-width: 768px)

const Home = () => {
  return (
    <div className="home-container-1">
    <LeftSidebar/>

    <div className="home-container-2">
   <HomeMainBar />
   <RightSideBar />
  
    </div>
  </div>
  )
}

export default Home


