import React from 'react'
import { globalContext } from './Content'

const Home = () => {
    const a=globalContext();
    return (
        <>
         <div className='bodysection' >
                
                <div className='leftsection'>
                    <h1>Create <br></br>& deliver</h1>
                    <h2>Real Experience</h2>
                    <button className='seemorebtn' > See More</button>
                    <img src='./images/579161.png'  />
                </div>
            </div>
            
        </>
    )
}

export default Home
