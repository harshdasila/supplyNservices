import React from 'react'
import banner from '../images/banner.png'
import bannerMain from '../images/print-scan-and-fax-web-banner.jpg'
// ../images/print-scan-and-fax-web-banner.jpg
const MainPoster = () => {
  return (
    <div className='h-auto w-full'>
      <img style={{height:'30em',width:'100vw'}} src={bannerMain}></img>
    </div>
  )
}

export default MainPoster
