import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './app'
import './main.css'
import {AppProvider} from './context'

function Advance(){
  return(
 <div>
 <AppProvider>
    <App/>
    </AppProvider>
</div>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Advance/>)