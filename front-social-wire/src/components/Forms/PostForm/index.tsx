import React, {useState} from 'react'

export default function PostForm() {
  const [data, setData] = useState({});

  const handleChange = (event:any) => {
    let newData = { ...data , ...{[event.target.name] : event.target.value}}
    setData(newData); 
};
  
  return (
    <>
        <div>
            <form>
                <label htmlFor="tittle-message">Tittle message</label>
                <input type="text" name='tittle-message' onChange={handleChange} placeholder='Talk about me' id='tittle-message' />

                <label htmlFor="messages">Messages</label>
                <input type="text" name='messages' onChange={handleChange} placeholder='create message for share with friends. max 700 chars' id='messages' />
      
                 <button type="submit" onClick={()=>console.log('hola PostForm')}>Share</button>
            </form>
        </div>
    </>
  )
}
