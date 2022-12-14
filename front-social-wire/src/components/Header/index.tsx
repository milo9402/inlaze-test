import React from 'react'
import {ReactComponent as RecentPostsIcon}  from 'assets/icons/chatbox-ellipses.svg';
import { Link } from 'react-router-dom';

// icons
import {ReactComponent as DropDownIcon}  from 'assets/icons/menu.svg';
import {ReactComponent as CreateIcon}  from 'assets/icons/create.svg'
import {ReactComponent as SendIcon}  from 'assets/icons/send.svg'
import {ReactComponent as ChatBubbleIcon}  from 'assets/icons/chatbubbles-sharp.svg'
import {ReactComponent as LogoutIcon}  from 'assets/icons/log-in-sharp.svg'



export const menuItems = [
  {
    title: 'Create Messages',
    url: '/new-post',
    icon:<CreateIcon/>,
  },
  {
    title: 'My Messages',
    url: '/my-posts',
    icon:<SendIcon/>,
  },
  {
    title: 'See all Messages',
    url: '/all-post',
    icon:<ChatBubbleIcon/>,
  },
  {
    title: 'Logout',
    url: '/',
    icon:<LogoutIcon/>,
  },
];

export default function Header() {
  return (
    <div className='header_container'>
      <h1 className='header_title'> Wires </h1>
      <nav className='navbar_container'>
        <ul className='navbar_list'>
          {menuItems.map((menu, index) => {
            return (
              <li className="navbar_item" key={index}>
                <span className="navbar_item_icon">{menu.icon} </span>
                <Link to={menu.url}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className='navbar_home-icons'>
          <div className='navbar_messages'>
            <RecentPostsIcon/>
          </div>
          <div className='navbar_menu'>
            <DropDownIcon onClick={()=>console.log('esta abriendo el dropdown')}/>
          </div>
        </div>
      </nav>
      
    </div>
  )
}