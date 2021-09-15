import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { list } from './Data';
import { Globalcontext } from './Context';



const Slidebar = () => {
    const {showslidebar,closesliderbar}=Globalcontext()
    return (
        <section>
            <div className={`${showslidebar?'mainsection show':'mainsection'}`} >
                <div className='detailmainsection' >
                    <div className='close' >
                        <button className='btnclose'onClick={closesliderbar} >
                            <AiOutlineClose/>
                        </button>
                    </div>
                    <div className='listsectionnewnavbar' >
                      {
                          list.map((items)=>{
                              const{id,page,link}=items
                              return(
                                <>
                                <h3 key={id}>{page}</h3>
                                <div className='innerlistsection'  >
                                    <ul className='listoful' >
                                        {
                                            link.map((itemslist)=>{
                                                const{linkname,url}=itemslist
                                                return(
                                                    <li>
                                                        <a>{linkname}</a>
                                                    </li>
                                                )

                                            })
                                        }
                                    </ul>
                                </div>
                                </>
                                
                
                                
                                
                              )
                          })
                      }
                     </div>
                </div>
            </div>
            
        </section>
    )
}

export default Slidebar
