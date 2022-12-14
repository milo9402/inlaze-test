import React, {useState} from 'react'
import { authEndpoint } from '../../../api/auth';

export default function SignUpForm() {
  const [data, setData] = useState({});

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('handle submit en el signin')
    authEndpoint.register(data)
    .then((resp:any)=>{
      console.log('resp ---> ', resp )
    })
    .catch((error:any)=>{
      console.log('error ---> ', error )
    })
  }

  return (
    <>
      <form className='form_container' onSubmit={handleSubmit}>

        <div className='form_group'>
          <label htmlFor="username">NickName</label>
          <input className='custom_input' type="text" name='username'  onChange={handleChange} placeholder='username' id='username' />
        </div>

        <div className='form_group'>
          <label htmlFor="fullname">Name</label>
          <input className='custom_input' type="text" name='fullname'  onChange={handleChange} placeholder='fullname' id='fullname' />
        </div>

        <div className='form_group'>
          <label htmlFor="email">Email Address</label>
          <input className='custom_input' type="text" name='email'  onChange={handleChange} placeholder='email' id='email' />
        </div>

        <div className='form_group'>
          <label htmlFor="signup-password">Password</label>
          <input className='custom_input' type="password" name='password'  onChange={handleChange} placeholder='password' id='signup-password' />
        </div>

        <button className='custom_button' type="submit">Create</button>
      </form>
    </>
  )
}
