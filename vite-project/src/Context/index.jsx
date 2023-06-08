import { createContext } from 'react';

const Store = createContext();

export const StoreProvider = ({children})=>{
    return(
        <Store.Provider>
            {children}
        </Store.Provider>
    )
}
