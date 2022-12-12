import React from 'react'
import {ReactComponent as DropDownIcon}  from 'assets/icons/menu.svg';
import {ReactComponent as RecentPostsIcon}  from 'assets/icons/chatbox-ellipses.svg';

export default function Header({children}:any) {
  return (
    <div className='header_container'>
      <h1 className='header_title'> Wires </h1>
      <nav className='navbar_container'>
        <ul className='navbar_list'>
          <li className="navbar_item">Create Messages</li>
          <li className="navbar_item">My Messages</li>
          <li className="navbar_item">See all Messages</li>
          <li className="navbar_item">Logout</li>
        </ul>
        <div className='navbar_home-icons'>
          <div className='navbar_messages'>
            <RecentPostsIcon/>
          </div>
          <div className='navbar_menu'>
            <DropDownIcon/>
          </div>
        </div>
      </nav>
    </div>
  )
}