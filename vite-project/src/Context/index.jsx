import { createContext, useState , useEffect } from 'react';

export const Store = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({children})=>{
    // Get products
    const [ products , setProducts ] = useState(null);

    //Get products by title

    const [searchByTitle , setSearchByTitle] = useState('');

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setProducts(data))
      },[])
    
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

    //cart-product order
    const [ order , setOrder ] = useState([])

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
            closeCheckout,
            order,
            setOrder,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </Store.Provider>
    )
}
