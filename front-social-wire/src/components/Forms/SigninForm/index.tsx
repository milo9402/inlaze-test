import React, {useState} from 'react'
import { authEndpoint } from '../../../api/auth';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export default function SigninForm() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const cookies = new  Cookies();

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
  };

  const  handleSubmit = async(event:any) => {
    event.preventDefault();
    const resp = await authEndpoint.login(data);
    const { token, user } : any = resp.data;
    cookies.set('jwt-token',token,{path:'/'})
    cookies.set('id',user.id,{path:'/'})
    cookies.set('username',user.username,{path:'/'})
    navigate('/my-posts')
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
