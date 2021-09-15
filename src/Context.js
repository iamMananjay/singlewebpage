import React,{useContext,useState} from 'react'
export let apicontext=React.createContext()

export const Context = ({children}) => {
    const[showslidebar,setShowslidebar]=useState(false)
    const[showsubmenu,setShowsubmenu]=useState(false);
    const[location,setLocation]=useState({})

    const opensliderbar=()=>{
        return(setShowslidebar(true))
    }
    const closesliderbar=()=>{
        return(setShowslidebar(false))
    }
    const opensubmenu=(centerdiv)=>{
        setLocation(centerdiv)

       return(
        setShowsubmenu(true)
       )
    }
    const closesubmen=()=>{
        return(
            setShowsubmenu(false)

        )
    }

    return (
        <apicontext.Provider value={{
            showslidebar,
            opensliderbar,
            closesliderbar,
            opensubmenu,
            closesubmen,
            showsubmenu,
            location,

        }} >
            {children}
        </apicontext.Provider>
    )
}

export const Globalcontext=()=>{
    return(
        useContext(apicontext)

    )
}

