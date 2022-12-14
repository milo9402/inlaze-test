import React, {useState} from 'react'
import { authEndpoint } from '../../../api/auth';

export default function SigninForm() {
  const [data, setData] = useState({});

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('handle submit en el signin')
    authEndpoint.login(data)
    .then((resp:any)=>{
      console.log('resp ---> ', resp )
    })
    .catch((error:any)=>{
      console.log('error ---> ', error )
    })
  }

  return (
    <>
      <div>
        <form className='form_container' onSubmit={handleSubmit}>
            <div className='form_group'>
              <label htmlFor="email">Email Address</label>
              <input className='custom_input' type="text" name='email' onChange={handleChange} placeholder='Email' id='email' />
            </div>

            <div className='form_group'>
              <label htmlFor="signin-password">Password</label>
              <input className='custom_input' type="password" name='password' onChange={handleChange} placeholder='Password' id='signin-password' />
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
