import { createContext, useState } from 'react';

export const Store = createContext();

export const StoreProvider = ({children})=>{
    const [count,setCount] = useState(0);
    return(
        <Store.Provider value={{
            count,
            setCount
        }}>
            {children}
        </Store.Provider>
    )
}
