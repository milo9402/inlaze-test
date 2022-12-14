import React, { useEffect } from 'react'
import Card from '../Card';
import { postEndpoint } from 'api/post';

export default function Post() {

  useEffect(() => {
    postEndpoint.getAll()
      .then((resp:any)=>{
        console.log('resp ---> ', resp )
      })
      .catch((error:any)=>{
        console.log('error ---> ', error )
      })
  },[])
  
  return (
    <div className='post-container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>

  )
}
