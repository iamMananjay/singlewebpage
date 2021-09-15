import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Navbar from './Navbar';
import {Route} from 'react-router-dom'
import { listofnavbar } from './Data';
import Navbarsection from './Navbarsection';
import Slidebar from './Slidebar';
import Submenulist from './Submenulist';
function App() {
  const[value,setValue]=useState(listofnavbar);
   return (
    <>
    {
      value.map((items)=>{
        return(
          <Route path={items.path} key={items.id} >
    <Navbar arg={value} />  
    </Route>
        )
      })
    }
    <Navbarsection/>
    <Slidebar/>
    <Submenulist/>
    </>
  )


}

export default App;
