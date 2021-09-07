import React,{useContext,createContext} from 'react'

const appcontext=createContext();

export const Content = ({children}) => {
    return (
        <>
        <appcontext.Provider>
            {children}
        </appcontext.Provider>
            
        </>
    )
}

export const globalContext=()=>{
    return useContext(appcontext);
}

