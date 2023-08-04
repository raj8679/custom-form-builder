import React, { useState } from 'react'

export const CategorizeContext = React.createContext();

const CategorizeContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    return (
        <CategorizeContext.Provider value={{ data, setData }}>{children}</CategorizeContext.Provider>
    )
}

export default CategorizeContextProvider