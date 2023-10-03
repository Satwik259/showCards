import React from 'react'
import "./header.css"
 import {IoSearchSharp} from "react-icons/io5"
 import {HiOutlineChevronDown} from "react-icons/hi2"
const Header = () => {
  return (
    <nav id='headerid' className='header'>
    <div className='header-1'>
    <img className='logo' src='https://images.pexels.com/photos/18057909/pexels-photo-18057909/free-photo-of-three-parakeets-perching-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='logo'/>
    <h1 className='header1-2'>Trust</h1>
    </div>
    <div className='header2'>
    <div className='down'>
    <h1 className='header2headings'>HOME</h1>
    <HiOutlineChevronDown className='iconclass'/>
    </div>
    <h1 className='header2headings'>CAUSE</h1>
    <h1 className='header2headings'>EVENTS</h1>
    <div className='down'>
    <h1 className='header2headings'>PAGES</h1>
    <HiOutlineChevronDown className='iconclass'/>
    </div>
    <div className='down'>
    <h1 className='header2headings'>BLOG</h1>
    <HiOutlineChevronDown className='iconclass'/>
    </div>

    <h1 className='header2headings'>CONTACT</h1>
    <IoSearchSharp className='iconclass'/>
    </div>
    </nav>
  )
}

export default Header