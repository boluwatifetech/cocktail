import React from 'react';
import Loading from './loading'
import Cocktails from './cocktails'
import {useGlobalContext} from './context'

export default function Cocktailslist() {
const {loading,cocktail}=useGlobalContext()

if(loading){
    return<Loading/>
}
if(!cocktail){
    return(
   <div className='found'>
    <h2>no cocktails found</h2>
   </div>
    )
     
    
}
   
  return (
    <div className='grid-cock'>
     {
      cocktail.map((cock)=>{
        return<Cocktails key={cock.id} {...cock}/>
      })
     }
    </div>
  );
}
