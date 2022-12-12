import React from 'react'

export default function SignUpForm() {
  return (
    <>
        <div>Sign up Form</div>
            <div>
            <form action="">
                <label htmlFor="nickname">NickName</label>
                <input type="text" name='nickname' placeholder='nickname' id='nickname' />


                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='name' id='name' />


                <label htmlFor="email">Email Address</label>
                <input type="text" name='email' placeholder='email' id='email' />


                <label htmlFor="password">Password</label>
                <input type="text" name='password' placeholder='password' id='password' />

                <button type="submit">Create</button>
            </form>
        </div>
    </>
  )
}
