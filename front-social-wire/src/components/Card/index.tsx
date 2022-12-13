import React from 'react'

export default function Card() {
  return (
    <div className='card_container'>
        <div className='card_title'>Title</div>
        <div className='card_body'>
          <div>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has 

          </div>
      </div>
      <div className='card_footer'>
        <div className='card_footer_date' >10:25am 20/11/22</div>
        <div className='card_footer_author' >Daniel Amadeus</div>
      </div>
    </div>
  )
}
