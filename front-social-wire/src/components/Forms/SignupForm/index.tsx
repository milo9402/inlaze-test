import React from 'react'

export default function SignUpForm() {
  return (
    <>
      <form className='form_container' action="">

        <div className='form_group'>
          <label htmlFor="nickname">NickName</label>
          <input className='custom_input' type="text" name='nickname' placeholder='nickname' id='nickname' />
        </div>

        <div className='form_group'>
          <label htmlFor="name">Name</label>
          <input className='custom_input' type="text" name='name' placeholder='name' id='name' />
        </div>

        <div className='form_group'>
          <label htmlFor="email">Email Address</label>
          <input className='custom_input' type="text" name='email' placeholder='email' id='email' />
        </div>

        <div className='form_group'>
          <label htmlFor="password">Password</label>
          <input className='custom_input' type="text" name='password' placeholder='password' id='password' />
        </div>

        <button className='custom_button' type="submit">Create</button>
      </form>
    </>
  )
}
