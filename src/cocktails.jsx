import React from 'react';
import {Link} from 'react-router-dom'
export default function Cocktails({id,image,alcohol,category,drink,glass}) {
  return (
    <div className='cover-cocktails'>
    <div className="image">
      <img src={image}/>

    </div>
    <div className='content-cock'>
     <h1>Name:: {drink}</h1>
     <h3>Category:: {category}</h3>
      <p> Glass:: {glass}</p>
    <h3>Type:: {alcohol}</h3>
    
      </div>
    </div>
  );
}
