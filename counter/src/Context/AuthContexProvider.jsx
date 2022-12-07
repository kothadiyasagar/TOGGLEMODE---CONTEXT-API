import React, { useState } from "react";

export const AuthContext = React.createContext()
const AuthContextProvider = ({children})=>{

  const [count,setcount] = useState(0)
  const toggle =(count)=>{
    setcount(count)
  }
    
       
    
    const value ={count,toggle,setcount}
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}