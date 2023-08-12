import React,{useRef} from 'react';
import {useGlobalContext} from './context'

export default function Search() {
  const {setSearch}=useGlobalContext()
const refInput=useRef('')

const searchBox=()=>{
  setSearch(refInput.current.value)
}

const handleSubmit=(e)=>{
  e.preventDefault()
}

  return (
    <div className='input-container'>
      <form  onSubmit={handleSubmit}>
        <label htmlFor='text'>search for any drink :::</label>
        <input type='text'  ref={refInput} onChange={searchBox} />
      </form>
    </div>
  );
}
