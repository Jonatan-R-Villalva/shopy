import { createContext, useState } from 'react';

export const Store = createContext();

export const StoreProvider = ({children})=>{
    const [count,setCount] = useState(0);
    const [productDetailOpen,setProductDetailOpen] = useState(false);

    const openDetail = ()=> setProductDetailOpen(true);
    const closeDetail = ()=> setProductDetailOpen(false);

    return(
        <Store.Provider value={{
            count,
            setCount,
            openDetail,
            closeDetail,
            productDetailOpen
        }}>
            {children}
        </Store.Provider>
    )
}
