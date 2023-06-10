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

    //cart-product
    const [cartProducts , setCartProducts] = useState([]);

    // checkout-side-menu open/close
    const [checkoutSideMenuOpen , setCheckoutSideMenuOpen] = useState(false);
    const openCheckout = ()=> setCheckoutSideMenuOpen(true);
    const closeCheckout = ()=> setCheckoutSideMenuOpen(false);



    return(
        <Store.Provider value={{
            count,
            setCount,
            openDetail,
            closeDetail,
            productDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            checkoutSideMenuOpen,
            setCheckoutSideMenuOpen,
            openCheckout,
            closeCheckout
        }}>
            {children}
        </Store.Provider>
    )
}
