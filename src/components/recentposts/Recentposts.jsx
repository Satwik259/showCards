import React from 'react'
import "./recentposts.css"
import {BiSearch} from "react-icons/bi"
import Categories from '../categories/Categories'
const Recentposts = () => {
  return (
    <main className='big-flex' >
    <div>
        <h1 className='searchhead'>SEARCH</h1>

        <hr className='hr-top'/>
          <div className='reacentandsearch'>
        <input placeholder='Search'  className='search-input'/>
        <div className='searchicon'>
       
        <BiSearch />
        </div>
     
    </div>
    </div>
    <aside>
    <h1>RECENT POSTS</h1>
    <article className='recentposts-flex'>
    <div className='recent-flex'>
        <img src='https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height={100} width={100} alt='logo'/>
        <div>
            <h2>Clean water</h2>
            <p>14 October,2017</p>
        </div>
    </div>
    <div className='recent-flex'>
        <img src='https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height={100} width={100} alt='logo'/>
        <div>
            <h2>Clean water</h2>
            <p>14 October,2017</p>
        </div>
    </div> 
    <div className='recent-flex'>
        <img src='https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height={100} width={100} alt='logo'/>
        <div>
            <h2>Clean water</h2>
            <p>14 October,2017</p>
        </div>
    </div> 
    <div className='recent-flex'>
        <img src='https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height={100} width={100} alt='logo'/>
        <div>
            <h2>Clean water</h2>
            <p>14 October,2017</p>
        </div>
    </div>
    </article>
    </aside>
    <Categories/>
    </main>
  )
}

export default Recentposts