import React from 'react'
import Post from '../components/Post';

export default function AllPost() {
  return (
    <div className='all-post_container'>
        <h1 className='title'>All Messages</h1>

        <div className='all-post-search_container'>
            <div className='form_group'>
                <label htmlFor="search-text">What search?</label>
                <input className='custom_input' type="text" name='search-text' placeholder='search-text' id='search-text' />
            </div>

            <div className='form_group'>
                <label htmlFor="date">Data select</label>
                <input className='custom_input' type="date" name='date' placeholder='date' id='date' />
            </div>

        </div>
        <Post/>

    </div>

  )
}
