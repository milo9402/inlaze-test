import React, { useEffect } from 'react'
import Post from '../components/Post';
import {checkJwt} from 'utils/checkJwt';

export default function MyPost() {

  useEffect(() => {
    checkJwt()
  },[])
  
  return (
    <div className='my-post_container'>
        <h1 className='title'>My Messages</h1>

        <div className='my-post-search_container'>
            <div className='form_group'>
                <label htmlFor="date">Data select</label>
                <input className='custom_input' type="date" name='date' placeholder='date' id='date' />
            </div>
        </div>
        <Post/>
    </div>

  )
}
