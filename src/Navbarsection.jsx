import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Globalcontext } from './Context';
import { list } from './Data';




const Navbarsection = () => {
    const{opensliderbar,opensubmenu}=Globalcontext()

    const showlist=(e)=>{
        let listname=e.target.textContent;
       
        let subbmenu=e.target.getBoundingClientRect()
        let centerdiv=(subbmenu.left+subbmenu.right)/2
        opensubmenu(centerdiv)

    }
    return (
        <nav>
            <div className='newnavbarsection' >
                <div className='newnavbarsectionmb' >
                    <h1>ComplexNepal</h1>
                    <button className='hambtn' onClick={opensliderbar} >
                        <GiHamburgerMenu/>
                    </button>

                </div>
                <div className='newnavbarsectionlg' >
                    <ul>
                        {
                            list.map((itemss)=>{
                                const{id,page}=itemss
                                return(
                                    <li key={id} >
                                        <a onMouseOver={showlist} >{page}</a>
                                     </li>
                                )

                            })
                        }
                        
                    </ul>
                </div>
                <button className='singbtn' >Signin</button>
            </div>
        </nav>
    )
}

export default Navbarsection
