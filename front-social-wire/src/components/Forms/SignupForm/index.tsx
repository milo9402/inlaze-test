import React, {useState} from 'react'
import { authEndpoint } from '../../../api/auth';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


export default function SignUpForm() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const cookies = new  Cookies();

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
  };

  const  handleSubmit = async(event:any) => {
    event.preventDefault();
    await authEndpoint.register(data);
    const resp = await authEndpoint.login(data);
    const { token, user } : any = resp.data;
    cookies.set('jwt-token',token,{path:'/'})
    cookies.set('id',user.id,{path:'/'})
    cookies.set('username',user.username,{path:'/'})
    navigate('/my-posts')
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
