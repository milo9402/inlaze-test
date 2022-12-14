import React, {useState} from 'react'
import { postEndpoint } from '../../../api/post';
import { checkJwt } from '../../../utils/checkJwt';

export default function PostForm() {
  const [data, setData] = useState({});
  const { userId, currentToken } = checkJwt()

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
  };
  
  const  handleSubmit = async(event:any) => {
    event.preventDefault();
    await postEndpoint.createOne({
      user: userId,
      ...data
    }, currentToken);
  }

  return (
        <form  onSubmit={handleSubmit} className='new-post-create_container'>
          <div className='form_group'>
            <label htmlFor="tittle-message">Tittle message</label>
            <input className='custom_input' type="text" name='title' onChange={handleChange} placeholder='Talk about me' id='tittle-message' />
          </div>

          <div className='form_group'>
            <label htmlFor="messages">Messages</label>
            <input className='custom_input new-message' type="text" name='message' onChange={handleChange} placeholder='create message for share with friends. max 700 chars' id='messages' />
          </div>
            <button className='custom_button share-button' type="submit" onClick={handleChange}>Share</button>
        </form>
  )
}
