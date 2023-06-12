import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Store } from '../../Context';
import { OrderCards } from '../OrderCards';


import './styles.css'

export const CheckoutSideMenu = () =>{
    const context = useContext(Store);
    const handleDelete = (id)=>{
        const filteredProducts = context.cartProducts.filter(prod => prod.id !== id)
        context.setCartProducts(filteredProducts)
    }
    return(
        <aside className={`${context.checkoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu border border-black rounded-lg flex-col fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer hover:text-red-600' 
                    onClick={()=> context.closeCheckout()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(prod =>(
                    <OrderCards
                    key= {prod.id}
                    id= {prod.id}
                    title= {prod.title}
                    imgUrl= {prod.images}
                    price= {prod.price}
                    handleDelete= {handleDelete}
                    />
                ))
            }
            </div>
        </aside>
    )
}