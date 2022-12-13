import React from 'react'

export default function SigninForm() {
  return (
    <>
      <div>
        <form className='form_container' action="">
            <div className='form_group'>
              <label htmlFor="email">Email Address</label>
              <input className='custom_input' type="text" name='email' placeholder='Email' id='email' />
            </div>

            <div className='form_group'>
              <label htmlFor="password">Password</label>
              <input className='custom_input' type="text" name='password' placeholder='Password' id='password' />
            </div>

            <div className='form_group checkbox'>
              <input type="checkbox" name='remember me' placeholder='remember me' id='remember me' />
              <label htmlFor="remember me">Remember me</label>
            </div>

            <button className='custom_button' type="submit">Sign in</button>

        </form>
      </div>
    </>
  )
}
