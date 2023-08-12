import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='cover-nav'>
     <h2>drink <span> me</span></h2>
     <div className='main-nav'>
      <ul>
      <Link to='/' className='each-nav'>home</Link>
        <Link to='/about' className='each-nav'>about</Link>
      </ul>
     </div>
    </div>
  );
}
