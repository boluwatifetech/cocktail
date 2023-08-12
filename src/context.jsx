import React,{useContext,useState,useEffect} from 'react'
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext=React.createContext()

const AppProvider=({children})=>{
const [loading,setLoading]=useState(true)
const [search,setSearch]=useState('a')
const [cocktail,setCockTail]=useState([])

const fetchData=async()=>{
    setLoading(true)
    try{
const response=await fetch(`${url} ${search}`)
const data=await response.json()

const {drinks}=data
console.log(drinks)
if(drinks){
const newDrinks=drinks.map((drink)=>{
const{
    idDrink,strAlcoholic,strCategory,strDrink,strDrinkThumb,strGlass
}=drink

return{
    id:idDrink,
    alcohol:strAlcoholic,
    category:strCategory,
    drink:strDrink,
 image:strDrinkThumb,
    glass:strGlass,
}
})
setCockTail(newDrinks)
setLoading(false)
}
else{
    setCockTail([])
    setLoading(false)
}
    }
    catch (error){
console.log(error)
    }
}

useEffect(()=>{
    fetchData()
},[search])

    return <AppContext.Provider value={{
        loading,cocktail,setSearch
    }}>
{children}
    </AppContext.Provider>
}


export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext}