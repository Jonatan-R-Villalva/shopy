import { createContext, useState , useEffect } from 'react';

export const Store = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({children})=>{
    // Get products
    const [ products , setProducts ] = useState(null);
    const [ filteredProducts , setFilteredProducts ] = useState('');

    //Get products by title

    const [searchByTitle , setSearchByTitle] = useState('');

    //Get products by category

    const [searchByCategory , setSearchByCategory] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const filteredProductsByTitle = (products , searchByTitle)=>{
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredProductsByCategory = (products , searchByCategory)=>{
        return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (type , products , searchByCategory , searchByTitle)=>{
        if(type === 'BY_TITLE'){
            return filteredProductsByTitle(products,searchByTitle)
            
        }
        if(type === 'BY_CATEGORY'){
            return filteredProductsByCategory(products,searchByCategory)
        }
        if(type === 'BY_TITLE_AND_CATEGORY'){
            return filteredProductsByCategory(products,searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!type){
            return products
        }
    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY',products,searchByCategory,searchByTitle))
        if(searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products,searchByCategory,searchByTitle))
        if(!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY',products,searchByCategory,searchByTitle))
        if(!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null,products,searchByCategory,searchByTitle))
    },[products, searchByTitle , searchByCategory])

    
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
            setSearchByTitle,
            filteredProducts,
            setFilteredProducts,
            filteredProductsByTitle,
            searchByCategory,
            setSearchByCategory,
            filteredProductsByCategory,
            filterBy
        }}>
            {children}
        </Store.Provider>
    )
}
