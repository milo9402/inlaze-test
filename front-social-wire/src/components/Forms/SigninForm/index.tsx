import React from 'react'

export default function SigninForm() {
  return (
    <>
      <div>Sign in Form</div>
          <div>
          <form action="">
                <label htmlFor="email">Email Address</label>
                <input type="text" name='email' placeholder='email' id='email' />

                <label htmlFor="password">Password</label>
                <input type="text" name='password' placeholder='password' id='password' />

                <input type="checkbox" name='remember me' placeholder='remember me' id='remember me' />
                <label htmlFor="remember me">Remember me</label>

          </form>
      </div>
    </>
  )
}
