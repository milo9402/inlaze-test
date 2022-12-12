import React from 'react'
import SiginForm from 'components/Forms/SigninForm/index';
import SignUpForm from 'components/Forms/SignupForm';
import WireImage from 'assets/image/image.png';
import Card from 'components/Card';
import PostForm from '../components/Forms/PostForm/index';

export default function Login() {
  return (
    <>
        <img src={WireImage} alt="WireImage"  width={400}/>
        <div>Welcome to Wires</div>
        <SiginForm/>
        <SignUpForm/>
        <PostForm/>
        <p> &copy; 2022 All Rights Reserved . Wires  </p>
        <p> Privacy Policy | Terms and Conditions </p>

        <Card/>
    </>
  )
}
