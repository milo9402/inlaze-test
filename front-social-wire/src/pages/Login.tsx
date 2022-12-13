import React, {useState} from 'react'
import SiginForm from 'components/Forms/SigninForm/index';
import SignUpForm from 'components/Forms/SignupForm';
import WireImage from 'assets/image/image.png';
import Card from 'components/Card';
import PostForm from '../components/Forms/PostForm/index';

export default function Login() {

  const [showSignUpForm, setshowSignUpForm] = useState(true);
  
  const toggleForm = () => {
    return showSignUpForm ?  <SignUpForm/> : <SiginForm/>
  }


  return (
    <div className='login_container'>
      <div className='login-banner_img'>
        <img className='banner-img' src={WireImage} alt="WireImage" />
        <h2 className='banner-text'> Wires</h2>
      </div>
      <h1 className='title'>Welcome to Wires</h1>

      <span className='login-toogle_form'>
        <span> Sign Up</span>
        <label className="switch">
          <input type="checkbox" onChange={()=> setshowSignUpForm(!showSignUpForm)}/>
          <span className="slider round"></span>
        </label>
        <span> Sign In</span>
      </span>
      {/* <SiginForm/>
      <SignUpForm/> */}
      {/* <PostForm/> */}
      { toggleForm() }
      <p className='login_copy'> 
        <span>
          &copy; 2022
        </span>
      All Rights Reserved . Wires  </p>
      <p className='login_terms'> Privacy Policy | Terms and Conditions </p>
    </div>
  )
}
