import React from 'react'

const Fillupsection = () => {
    return (
        <div className='fillupsection'  style={{backgroundImage:'url(./images/allmobile.jpg)'}} >
        <div className='fillupsectioncenter' >
            <div className='fillupheadsection' >
            <h1>Dream,train and <br></br>activate</h1>
            <p>Loream React Lorem Ipsum is a (TypeScript-supported) React library including components and functions to generate placeholder text.</p>
            </div>
            <form className='fromsection' >
                <input type='text'  placeholder='Name' className='inputsection'  />
                <input type='email'  placeholder='Email' className='inputsection'  />
                <textarea placeholder='Message' className='inputsection msg'  />
                <input type='submit'  className='submit'  />
            </form>
        </div>            
        </div>
    )
}

export default Fillupsection
