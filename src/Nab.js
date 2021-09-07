import React ,{useState} from 'react'
import { BiMenu } from "react-icons/bi";



const Nab = () => {
    const[showmenu,setShowmenu]=useState(false);


    return (
        <nav>
            <div className='navsection' >
                
                <div className='headersection' >
                    <h2>Complex<span>Nepal</span></h2>
                    <button className='menusection' onClick={()=>setShowmenu(!showmenu)} >
                        <BiMenu/>
                    </button>
                </div>
                <div className={`${showmenu?'listsesction showlistsection':'listsesction '}`} >
                    <ul>
                        <li>
                            <a href='#' >Home</a>
                        </li>
                        <li>
                            <a href='#' >About</a>
                        </li>
                        <li>
                            <a href='#' >Contact</a>
                        </li>
                    </ul>
                </div>
                
            </div>
           
        </nav>
    )
}

export default Nab
