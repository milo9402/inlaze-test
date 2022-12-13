import React from 'react'
import WireImage from 'assets/image/image.png';


export default function PageNotFound() {
  return (
    <div className='not-found-page_container'>
      <img className='not-found-page_img' src={WireImage} alt="not-found-img" />
        PageNotFound
      <button className='custom_button primay'> Back to My Posts</button>
    </div>
  )
}
