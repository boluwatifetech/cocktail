import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom'
import Loading from './loading'
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
console.log(url)
export default function singlecock() {
    const [loading,setLoading]=useState(false)
    const [cocktail,setCocktail]=useState(null)
    const {id} =useParams()

    const getId=async()=>{
        
        setLoading(true)
        try {
            const res=await fetch(`${url} ${id}`)
const data=await res.json()

const {drinks}=data[0]
if(drinks){
    const newCock=drinks.map((drink)=>{
const {
strDrink,strDrinkThumb,strAlcoholic,strCategory,
strGlass,strInstruction,
strIngredient1,
strIngredient2,
strIngredient3,
strIngredient4,
strIngredient5,
}=drink
const ingredient=[
   strIngredient1,
strIngredient2,
strIngredient3,
strIngredient4,
strIngredient5, 
]
return{
    name:strDrink,
    image:strDrinkThumb,
    alcohol:strAlcoholic,
    category:strCategory,
    glass:strGlass,
    instruction:strInstruction,
    ingredient:ingredient,
}

    })
setLoading(false)
setCocktail(newCock)
}


   
else{
setCocktail(null)
}


        }
         catch (error) {
         console.log(error)  
 setLoading(false)
        }

    }

    useEffect(()=>{
getId()
    },[id])

    if(loading){
        return<div>
            <Loading/>
        </div>
    }
if(!cocktail){
    return(
        <div>
            no cocktail in the hood
        </div>
    )
}

const {name,image,
    category,glass,
    instruction,
    ingredient,
    alcohol}=cocktail
  return (
    <div>
    <img src={image} alt={name}/>
      <h1>{name}</h1>
      <h2>{glass}</h2>
      <h3>{category}</h3>
      <p>{alcohol}</p>
      <h2>{instruction}</h2>
      <span>
        {
            ingredient.map((sweet,index)=>{
                return(
                    <div key={index}>
{sweet}
                    </div>
                )
            })
        }
      </span>
      <Link to='/'>
        <button>back to home</button>
      </Link>
    </div>
  );
}
