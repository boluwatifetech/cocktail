import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import SingleCock from './singlecock'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App(){
 
    return(
        <div>
<Router>
<Navbar/>
<Switch>

    <Route exact path='/'>
        <Home/>
    </Route>
    <Route path='/about'>
        <About/>
    </Route>
    <Route path='/cocktail/:id'>
        <SingleCock/>
    </Route>
    </Switch>
</Router>
       
      

        </div>
    )
}

export default App