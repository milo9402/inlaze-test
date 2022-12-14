import React, { useEffect, useState } from 'react'
import Card from '../Card';
import { postEndpoint } from 'api/post';
import { checkJwt } from '../../utils/checkJwt';

export default function Post() {
  const { userId, currentToken } = checkJwt()
  const [card, setCard] = useState([]);

  useEffect(() => {
    postEndpoint.getAll(currentToken)
      .then((resp:any)=>{
        setCard(resp.data);
      })
      .catch((error:any)=>{
        console.log('error ---> ', error )
      })
  },[])

  
  
  return (

    <div className='post-container'>
        { card.map((card:any, index:number) => {
          return (
            <Card
              key={index}
              title={card.title}
              message={card.message}
              date={card.createdAt}
            />
          );
        })}
    </div>

  )
}
