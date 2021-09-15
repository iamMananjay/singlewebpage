import React,{useState ,useEffect,useRef} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';

const Navbar = ({arg}) => {

    const[show,setShow]=useState(false);
    let listsectionref=useRef();
    let listsectionuiref=useRef();

    useEffect(()=>{
        let listsectionheight=listsectionuiref.current.getBoundingClientRect().height;
        {
            if(show){
                listsectionref.current.style.height=`${listsectionheight}px`
            }
            else{
                listsectionref.current.style.height='0px'

            }
        }
        
    },[show]);

    return (
        <nav>
            <div className='navbar' >
                <div className='titleforsm' >
                    <h1>ComplexNepal</h1>
                    <button className='menubtn' onClick={()=>setShow(!show)}  >
                        <GiHamburgerMenu/>
                    </button>
                </div>
                <div className='listsection' ref={listsectionref}  >
                    <ul className='listsectionui'  ref={listsectionuiref}  >
                        {
                            arg.map((itemss)=>{
                                console.log(itemss.path)
                                const{id,title,path}=itemss;
                                return(
                                    <li key={id}>
                                     <Link to={path}  className='link'  >{title}</Link>
                                 </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
