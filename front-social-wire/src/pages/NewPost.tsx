import React from 'react'
import Post from '../components/Post';

export default function NewPost() {
  return (
    <div className='new-post_container'>
        <h1 className='title'>Create Message</h1>

        <div className='new-post-create_container'>
            <div className='form_group'>
              <label htmlFor="tittle">Tittle message</label>
              <input className='custom_input' type="text" name='tittle' placeholder='tittle' id='tittle' />
            </div>
            <div className='form_group'>
              <label htmlFor="message">Message</label>
              <input className='custom_input new-message' type="text" name='message' placeholder='create a message for your friends' id='message' />
            </div>

            <button className='custom_button share-button' type="submit">Share</button>
            
        </div>
        <Post/>
    </div>

  )
}
