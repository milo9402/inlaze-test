import React, { useEffect } from 'react'
import { checkJwt } from 'utils/checkJwt';
import PostForm from '../components/Forms/PostForm/index';

export default function NewPost() {

  useEffect(() => {
    checkJwt()
  },[])

  return (
    <div className='new-post_container'>
        <h1 className='title'>Create Message</h1>
        <PostForm/>
    </div>

  )
}
