import { createContext, useState } from 'react';

export const Store = createContext();

export const StoreProvider = ({children})=>{

    // shopping cart 
    const [count , setCount] = useState(0);
    
    // product-detail open/close
    const [productDetailOpen , setProductDetailOpen] = useState(false);
    const openDetail = ()=> setProductDetailOpen(true);
    const closeDetail = ()=> setProductDetailOpen(false);

    //product-detail show product
    const [productToShow , setProductToShow] = useState({});


    return(
        <Store.Provider value={{
            count,
            setCount,
            openDetail,
            closeDetail,
            productDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </Store.Provider>
    )
}
