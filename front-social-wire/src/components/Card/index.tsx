import React from 'react'

export default function Card({title, message, date }:any) {
  return (
    <div className='card_container'>
        <div className='card_title'>{title}</div>
        <div className='card_body'>
          <div>
            {message}
          </div>
      </div>
      <div className='card_footer'>
        <div className='card_footer_date' >{date}</div>
        <div className='card_footer_author' >Daniel Amadeus</div>
      </div>
    </div>
  )
}
