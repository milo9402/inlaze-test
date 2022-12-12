import React from 'react'

export default function PostForm() {
  return (
    <>
        <div>
            <form action="">
                <label htmlFor="tittle-message">Tittle message</label>
                <input type="text" name='tittle-message' placeholder='Talk about me' id='tittle-message' />

                <label htmlFor="messages">Messages</label>
                <input type="text" name='messages' placeholder='create message for share with friends. max 700 chars' id='messages' />

                <button type="submit">Share</button>
            </form>
        </div>
    </>
  )
}
