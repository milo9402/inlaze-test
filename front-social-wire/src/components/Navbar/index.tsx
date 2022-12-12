
import React from 'react'
import {ReactComponent as DropDownIcon}  from 'assets/icons/menu.svg';
import {ReactComponent as RecentPostsIcon}  from 'assets/icons/chatbox-ellipses.svg';

export default function Navbar() {
  return (
    <div className='navbar_container'>
      <ul className='navbar_list'>
        <li className="navbar_item">Create Messages</li>
        <li className="navbar_item">My Messages</li>
        <li className="navbar_item">See all Messages</li>
        <li className="navbar_item">Logout</li>
      </ul>
      <span className='navbar_home-icon'>
        <RecentPostsIcon/>
        <DropDownIcon/>
      </span>
    </div>
  )
}