import React ,{useRef ,useEffect} from 'react'
import { Globalcontext } from './Context';


const Submenulist = () => {
    const{showsubmenu,location}=Globalcontext()

    let createref=useRef();

    useEffect(()=>{
        const sub=createref.current
        const{centerdiv}=location
        sub.style.left=`${centerdiv}px`
    

    },[location])


    return (
        <div className={`${showsubmenu ? 'submenu show':'submenu'}`} >
            <div className='centerdiv' ref={createref} >
            <h3>submenu</h3>

            </div>
        </div>
    )
}

export default Submenulist
